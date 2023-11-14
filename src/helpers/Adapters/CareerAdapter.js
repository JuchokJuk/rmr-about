import { isExist } from "@helpers/functions"
import { cardAdapter } from "./CardAdapter"

export const careerPageAdapter = (data) => {
    const cards = data.results
    const tagsFirst = Object.assign({}, ...data.tags.firstLevel.map(tag => ({ [tag._id]: tag })))

    const firstToSecond = {}
    const secondToFirst = {}

    cards.forEach(card => {
        let l1 = []
        let l2 = []
        card.tags.forEach(tag => {
            if (tagsFirst[tag._id]) {
                l1.push(tag)
                tag['level'] = 0
            } else {
                l2.push(tag)
                tag['level'] = 1
            }
        })

        l1.forEach(tag => {
            if (tag._id in firstToSecond) {
                l2.forEach(l2_tag => firstToSecond[tag._id].tags.add(l2_tag))
            } else {
                firstToSecond[tag._id] = { tags: {}, cards: [] }
                firstToSecond[tag._id].tags = new Set(l2)
            }
            firstToSecond[tag._id].cards.push(card._id)
        })

        l2.forEach(tag => {
            if (tag._id in secondToFirst) {
                l1.forEach(l1_tag => secondToFirst[tag._id].tags.add(l1_tag))
            } else {
                secondToFirst[tag._id] = { tags: {}, cards: [] }
                secondToFirst[tag._id].tags = new Set(l1)
            }
            secondToFirst[tag._id].cards.push(card._id)
        })
    })

    for (const key in firstToSecond) {
        if (Object.hasOwnProperty.call(firstToSecond, key)) {
            firstToSecond[key].tags = [...(firstToSecond[key].tags)]
        }
    }

    for (const key in secondToFirst) {
        if (Object.hasOwnProperty.call(secondToFirst, key)) {
            secondToFirst[key].tags = [...(secondToFirst[key].tags)]
        }
    }

    let pageData = {
        firstHeader: '',
        firstDescription: '',
        video: null,
        videoPoster: null,
        videoCaption: null,
        secondHeader: '',
        secondDescription: '',
        notice: '',
        relatedArticles: null
    }    

    if (data.pageData) {
        pageData.firstHeader = isExist(data.pageData.titleH1, '')
        pageData.firstDescription = isExist(data.pageData.descriptionTop, '')
        pageData.secondHeader = isExist(data.pageData.titleH3, '')
        pageData.secondDescription = isExist(data.pageData.descriptionBottom, '')
        pageData.video = isExist(data.pageData.video, null)
        pageData.videoPoster = isExist(data.pageData.videoPoster, null)
        pageData.videoCaption = isExist(data.pageData.videoCaption, null)
        pageData.notice = isExist(data.pageData.notice, '')
        pageData.relatedArticles = data.pageData.relatedArticles ? data.pageData.relatedArticles.reduce(cardAdapter, []) : []
    }

    return({
        cards: cards,
        tags: {
            firstLevel: data.tags.firstLevel,
            secondLevel: data.tags.secondLevel,
        },
        filters: {
            firstToSecond: firstToSecond,
            secondToFirst: secondToFirst
        },
        availableFilters: {
            secondLevel: availableTags(firstToSecond, [], data.tags.secondLevel)
        },
        pageData: pageData
    })
}

export const availableTags = (firstToSecond, selectedFirstLevel, secondLevel) => {
    let availableTags = []
    selectedFirstLevel.forEach(filter => {
        availableTags = [...availableTags, ...firstToSecond[filter._id].tags]
    })

    // Everything is available 
    if (!availableTags.length) {
        availableTags = secondLevel
    }

    return [...new Set(availableTags)].reduce((acc, tag) => (acc[tag._id] = tag, acc), {})
}

export const filterCards = (cards, selectedFilters, filters) => {

    let cardsFromFirstLevel = []
    selectedFilters.firstLevel.forEach(tag => {
        cardsFromFirstLevel = [...cardsFromFirstLevel, ...filters.firstToSecond[tag._id].cards]
    })

    if (selectedFilters.firstLevel.length === 0) {
        for (const key in filters.firstToSecond) {
            if (Object.hasOwnProperty.call(filters.firstToSecond, key)) {
                cardsFromFirstLevel = [...cardsFromFirstLevel, ...filters.firstToSecond[key].cards]
            }
        }
    }

    let cardsFromSecondLevel = []
    selectedFilters.secondLevel.forEach(tag => {
        cardsFromSecondLevel = [...cardsFromSecondLevel, ...filters.secondToFirst[tag._id].cards]
    })

    if (selectedFilters.secondLevel.length === 0) {
        for (const key in filters.secondToFirst) {
            if (Object.hasOwnProperty.call(filters.secondToFirst, key)) {
                cardsFromSecondLevel = [...cardsFromFirstLevel, ...filters.secondToFirst[key].cards]
            }
        }
    }

    cardsFromFirstLevel = new Set(cardsFromFirstLevel)
    cardsFromSecondLevel = new Set(cardsFromSecondLevel)

    function intersection(setA, setB) {
        let _intersection = new Set()
        for (let elem of setB) {
            if (setA.has(elem)) {
                _intersection.add(elem)
            }
        }
        return [..._intersection].reduce((acc, id) => (acc[id] = true, acc), {})
    }

    const filteredCards = intersection(cardsFromFirstLevel, cardsFromSecondLevel)

    return cards.filter((card) => filteredCards[card._id])
}