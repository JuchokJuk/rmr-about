import { cardAdapter, getUrl, getUrlObject } from '@helpers/Adapters/CardAdapter';
import articlesApi from '@api/articles'
import { isExist } from '@helpers/functions'

export const articleAdapter = (data, currentUrl, mainTag = '') => {
    let header = {
        title: isExist(data.title, ''),
        social: {
            instagram: null,
            facebook: isExist(data.facebook, null),
            twitter: isExist(data.twitter, null)
        },
        intro: isExist(data.introText, ""),
        image: data.imgMain ? {
            url: isExist(data.imgMain.url, ""),
            width: isExist(data.imgMain.width, 0),
            caption: isExist(data.imgMain.caption, ""),
            alt: isExist(data.imgMain.alternativeText, ""),
            formats: isExist(data.imgMain.formats, {})
        } : {
            url: "",
            width:  0,
            caption: "",
            alt: "",
            formats: {}
        },
        visibleDateCreated : isExist(data.visibleDateCreated, false),
        createdAt: isExist(data.createdAt, "")
    }

    let author = data.employees ? {
        name: data.employees.length !== 0 ? data.employees[0].name : '',
        lastname: data.employees.length !== 0 ? data.employees[0].lastName : '',
        position: data.employees.length !== 0 ? data.employees[0].position : '',
        fullname: data.employees.length !== 0 ? `${data.employees[0].name} ${data.employees[0].lastName}` : '',
        visibleAuthor: data.employees.length !== 0 ? data.visibleAuthorOnPreview : null,
        image: data.employees.length !== 0 ? data.employees[0].photo : null
    } : {}

    let blocks = data.mainContent ? {
        time: isExist(data.mainContent.time, {}),
        items: isExist(data.mainContent.blocks, [])
    } : {}

    let tags = data.tags
    let similarTags = data.similarTags ? data.similarTags : []
    let similarArticles = data.similarArticles ? data.similarArticles.reduce(cardAdapter, []) : []
    let seo = {}

    if (data.seo) {
        seo = data.seo
        if (seo.ogImage && seo.ogImage.formats && seo.ogImage.formats.thumbnail) {
            seo.ogImage = seo.ogImage.formats.thumbnail.url ? seo.ogImage.formats.thumbnail.url : ''
        }
    }

    let aboutTeam = {}

    if (data.aboutTeam && data.aboutTeam.length) {
        aboutTeam = {
            header: isExist(data.aboutTeam[0].title, ""),
            description: isExist(data.aboutTeam[0].description, ""),
            image: data.aboutTeam[0].image[0] ? {
                url: isExist(data.aboutTeam[0].image[0].url, ""),
                width: isExist(data.aboutTeam[0].image[0].width, 0),
                caption: isExist(data.aboutTeam[0].image[0].caption, ""),
                alt: isExist(data.aboutTeam[0].image[0].alternativeText, ""),
                formats: isExist(data.aboutTeam[0].image[0].formats, {})
            } : {
                url: "",
                width: 0,
                caption: "",
                alt: "",
                formats: {}
            }
        }
    }

    let advantages = {}

    if (data.advantages && data.advantages.length) {
        advantages = {
            scroll: {
                text: isExist(data.advantages[0].title, ""),
                image: data.advantages[0].image[0] ? {
                    url: isExist(data.advantages[0].image[0].url, ""),
                    width: isExist(data.advantages[0].image[0].width, 0),
                    caption: isExist(data.advantages[0].image[0].caption, ""),
                    alt: isExist(data.advantages[0].image[0].alternativeText, ""),
                    formats: isExist(data.advantages[0].image[0].formats, {})
                } : {
                    url: "",
                    width: 0,
                    caption: "",
                    alt: "",
                    formats: {}
                }
            },
            list: isExist(data.advantages[0].advantageItems, [])
        }
    }
    
    let authorsToRefresh = []

    return {
        id: isExist(data._id, ''),
        header,
        author,
        blocks,
        aboutTeam,
        advantages,
        tags,
        similarTags,
        similarArticles,
        seo,
        currentUrl,
        mainTag,
        authorsToRefresh
    }
}

export async function injectSimilarArticlesByIDs (result) {

    let similarArticlesIds = []
    let authorIds = new Set()

    similarArticlesIds = result.blocks.items.reduce((acc, block) => {
        if (block.type === 'similarArticles') {
            let articlesIds = block.data.art.map( article => {
                if (!article.content.createdAt) {
                    return article.content._id
                } else {
                    return null
                }
            }, [])
            acc.push(articlesIds);
        }
        return acc;
    }, [])[0]


    result.blocks.items.forEach(block => {
        if (block.type === 'quote' || block.type === 'timetable') {
            if (block.data.members[0] && block.data.members[0]._id) {
                authorIds.add(block.data.members[0]._id)
            }
        }
    })

    result.authorsToRefresh = [...authorIds]

    if (!similarArticlesIds) {
        return result
    }     

    let similarResponse = await articlesApi.getSimialarArticles(similarArticlesIds.filter(id => id !== null));

    similarResponse.data.map(similar => {
        result.blocks.items.map(block => {
            if (block.type === 'similarArticles') {
                block.data.art.map(artItem => {
                    if (artItem.content._id === similar._id) {
                        artItem.content = {...similar}
                        artItem.content.url = getUrl(similar.url, similar.sectionTags)
                        artItem.content.urlX = getUrlObject(similar);
                    }
                })
            }
        })
    })

    return result
}