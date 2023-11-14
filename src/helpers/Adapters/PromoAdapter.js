import { isExist } from '@helpers/functions'

const getUrl = (slug, tags) => {
    let url = '/';

    if (tags.length !== 0) {
        url = `${tags[0].url}/${slug}`
    }

    return url;
}

export const promoAdapter = (promo) => {

    return {
        id: isExist(promo._id, 0),
        heading: isExist(promo.title, ""),
        caption: isExist(promo.title),
        linkUrl : getUrl(promo.url, promo.sectionTags),
        image : isExist(promo.imgMain, ''),
        title: isExist(promo.introText, ""),
        urlX: {
            slug: promo.url,
            tag: promo.sectionTags[0] ? promo.sectionTags[0].url : ''
        },
        author : {
            name : promo.employees.length !== 0 ? `${promo.employees[0].name} ${promo.employees[0].lastName}` : '',
            position: promo.employees.length !== 0 ? promo.employees[0].position : '',
            photo:  promo.employees.length !== 0 ? promo.employees[0].photo : null
        }
    };
}