import articlesApi from '@api/articles';
import { articleAdapter, injectSimilarArticlesByIDs } from '@helpers/Adapters/ArticleAdapter';
import { articleActionTypes } from '../constant';

const host = process.env.NEXT_PUBLIC_SITE_URL

export const initArticle = (tag, slug) => {

    return {
        type: articleActionTypes.TYPE,
        payload: articlesApi.getArticleBySlug(tag, slug)
            .then(result => articleAdapter(result.data, `${host}${tag}/${slug}`, tag ))
            .then(adoptedResult => injectSimilarArticlesByIDs(adoptedResult))
    }
}

export const initPreview = (id, url) => {

    return {
        type: articleActionTypes.TYPE,
        payload: articlesApi.getArticleById(id)
            .then(result => articleAdapter(result.data, `${host}${url}`))
            .then(adoptedResult => injectSimilarArticlesByIDs(adoptedResult))
    }
}
