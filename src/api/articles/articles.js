import { axiosInstance } from '@api/instance';
import { articlesUrl, limits } from '@api/constants';

const SECRET_KEY = process.env.NEXT_PUBLIC_PREVIEW_KEY

const getArticleBySlug = (tag, slug) => {
    return axiosInstance.get(`${articlesUrl.articles}/slug/${encodeURIComponent(tag)}/${encodeURIComponent(slug)}`)
}

const getArticleById = (id) => {
    return axiosInstance.get(`${articlesUrl.articles}/${encodeURIComponent(id)}`, {
        headers: {
            secretKey: SECRET_KEY
        }
    });
}

const getAvailableArticles = (page, routeTag, filters) => {
    const params = { '_limit': limits.cards }

    if (routeTag) {
        params["maintags.id_in"] = routeTag
    }

    if (filters) {
        params["subtags.id_in"] = filters
    }

    if (page) {
        params['_limit'] = page * limits.cards
        //params['_start'] = (page - 1) * limits.cards
    }

    return axiosInstance.get(`${articlesUrl.articles}`, {
        params: params
    });
}

const getMainArticles = () => {
    return axiosInstance.get(`${articlesUrl.articles}/main`);
}

const getSimialarArticles = (ids) => {
    const params = { 'id_in': [] }
    
    if(ids.length) {
        params['id_in'] = ids
    }
    
    return axiosInstance.get(`${articlesUrl.articles}/listbyids`, {
        params: params
    });
}

export default {
    getArticleBySlug,
    getAvailableArticles,
    getMainArticles,
    getSimialarArticles,
    getArticleById,
}