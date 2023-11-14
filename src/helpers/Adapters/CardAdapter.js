import { isExist } from "@helpers/functions"

const cardSizeToNumber = (size) => {

    switch(size) {
        case 'small':
            return 1
        case 'medium':
            return 3
        case 'big':
            return 4
        case 'large':
            return 3
        default:
            return 1
    }
}

const headingSizeToNumber = (size) => {
    switch(size) {
        case 'small':
            return 3
        case 'medium':
            return 2
        case 'big':
            return 1
        default:
            return 1
    }
}

const getAuthor = (remote, visible) => {
    let newAuthor = {}

    if (remote.length !== 0) {
        newAuthor = {
            name : `${remote[0].name} ${remote[0].lastName}`,
            position: isExist(remote[0].position, null),
            image: isExist(remote[0].photo, null),
            isAuthor: visible
        }
    }

    return newAuthor
}

const convertDateToString = (date) => {

    let stringDate = new Date(date)
    let day = stringDate.getUTCDate()
    let month = (stringDate.getUTCMonth() + 1)
    month = month >= 10 ? month : "0" + month // добавим 0 перед числом.
    let year = stringDate.getFullYear()

    return `${day}_${month}_${year}`
}

export const getUrl = (slug, tags) => {
    let url = '/'

    if (tags.length !== 0) {
        url = `${tags[0].url}/${slug}`
    }

    return url
}

const transfromABCtoRGBA = (bgColor, opacity = 1) => {

    switch(bgColor) {
        case 'white':
            return `rgba(255, 255, 255, ${opacity})`
        case 'black':
            return `rgba(0,0,0, ${opacity})`
        case 'transparent':
            return `transparent`
        default: 
            return bgColor
    }

}

const getCaseSettings = (config) => {

    if( !(config instanceof Array) ) {
        return {
            backgroundColor: transfromABCtoRGBA(config.backgroundColor),
            tagsColorBackground: transfromABCtoRGBA(config.tagColorBackground, 0.7),
            tagsBorderColor: config.tagColorBorder,
            tagsTextColor: transfromABCtoRGBA(config.tagColorText),
            headingColor: transfromABCtoRGBA(config.titleColor),
            tagsBlur: config.tagBlur,
            fullScreenImageUrl: config.backgroundImgOnPreiew instanceof Array ? null : config.backgroundImgOnPreiew.url
        }
    }
    return {}   
}

// Filter out competly broken cards
export const cardFilter = (data) => {

    if (data.type === 'caseSlider' || data.type === "simpleSlider") {
        return true
    } else {
        if (!(data.url && (data.sectionTags && data.sectionTags[0] && data.sectionTags[0].url) && data.title)) {
            // console.error('<<Broken card>>', data)
            return false
        }
    }
    
    return true
}

export const getUrlObject = (data) => {

    if (data) {
        return {
            slug: data.url ? data.url : '',
            tag: data.sectionTags[0] ? data.sectionTags[0].url : ''
        }
    } else {
        return {
            slug: '',
            tag: ''
        }
    }

}

const heightToArray = (cardOfSize) => {

    let newCardOfSize = {};

   for (let key in cardOfSize) {
        newCardOfSize[key] = [cardOfSize[key].height1920, 
                              cardOfSize[key].height1366, 
                              cardOfSize[key].height1024, 
                              cardOfSize[key].height1024, 
                              cardOfSize[key].height1024];
   }

    return newCardOfSize;
}

const getHeight = (type, data) => {
    
    switch(type) {
        case 'card':
            if (data.sizeOfCard) {
                return heightToArray(data.sizeOfCard)
            } else {
                return {
                    default: [data.height1920, data.height1366, data.height1024, data.height1024, data.height1024]
                }
            }
        case 'caseSlider':
            return [560, 408, 360, 392, 568];
        case 'simpleSlider':
            return [704, 504, 368, 392, 568]
        default:
            return [0, 0, 0, 0, 0]
    }
} 

const reorderTags = (tags) => {
    return tags.sort((a, b) => {
                if (a.name.length < b.name.length) {
                    return -1;
                } else if (a.name.length === b.name.length) {
                    return 0;
                } else {
                    return 1;
                }
                })
}

export const cardAdapter = (result, data) => {

    if (!cardFilter(data))
        return result

    const newData = {}
    try {
        newData.id = data._id
        newData.cardType = data.type
        newData.cardSize = cardSizeToNumber(data.sizeCardOnPreview)
        newData.url = getUrl(data.url, data.sectionTags)
        newData.urlX = getUrlObject(data)
        newData.tags = reorderTags(data.tags)
        newData.height = getHeight(data.type, data)

        switch(data.type) {
            case 'card':
                newData.heading     = data.title ? data.title : ''
                newData.headingSize = headingSizeToNumber(data.sizeTitleOnPreview)
                newData.isPubdate   = data.visibleDateCreated ? data.visibleDateCreated : false
                newData.author      = getAuthor(data.employees, data.visibleAuthorOnPreview)
                newData.timestamp   = convertDateToString(data.createdAt)
                newData.cover       = data.imgOnPreview && !data.imgOnPreview.length ? data.imgOnPreview : {}
                newData.caseSettings = data.case ? getCaseSettings(data.case) : {}
                newData.isCase       = data.case ? data.case.length !== 0 : false
            break;

            case 'caseSlider':
                newData.backColor = data.backColor ? data.backColor : null
                newData.frontColor = data.frontColor ? data.frontColor : null
                newData.slides = data.slides.length !== 0 ? data.slides : null
                newData.logo = data.logo ? data.logo : null
            break;

            case 'simpleSlider':
                newData.backColor = data.backColor ? data.backColor : null
                newData.frontColor = data.frontColor ? data.frontColor : null
                newData.slides = data.slides.length !== 0 ? data.slides : null
                newData.logo = data.logo ? data.logo : null
            break;
        }
        
    } catch(e) {
        return result
    }

    result.push(newData)

    return result
}

export const articleAdapterForSearch = (result, data) => {

    if (!cardFilter(data))
        return result

    const newData = {}

    try {
        newData.id = data._id
        newData.url = getUrl(data.url, data.sectionTags)
        newData.urlX = getUrlObject(data)
        newData.heading = data.title ? data.title : ''

    } catch (e) {
        return result
    }

    result.push(newData)

    return result
}