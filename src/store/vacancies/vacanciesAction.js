import vacanciesApi from '@api/vacancies';
import { articleAdapter, injectSimilarArticlesByIDs } from '@helpers/Adapters/ArticleAdapter';
import { articleActionTypes } from '../constant';

const host = process.env.NEXT_PUBLIC_SITE_URL

export const initVacancies = (tag, slug) => {

    return {
        type: articleActionTypes.TYPE,
        payload: vacanciesApi.getArticleBySlug(tag, slug)
            .then(result => articleAdapter(result.data, `${host}${tag}/${slug}`))
            .then(adoptedResult => injectSimilarArticlesByIDs(adoptedResult))
    }
}
