import { searchTypes } from '../constant'
import searchApi from "@api/search";
import { articleAdapterForSearch, cardAdapter } from '@helpers/Adapters/CardAdapter';

export const initPopularSearch = () => {
    return {
        type: searchTypes.TYPE_INIT,
        payload: searchApi.getInitialData().then(res => {
            return {
                cards: res.data.articles.reduce(cardAdapter, []),
                tags:  res.data.tags,
                queries: res.data.queries
            }
        })
    }
}

export const getSearchResults = (query, stamp) => {
    return {
        type: searchTypes.TYPE_SEARCH,
        payload: searchApi.getSearchData(query).then(res => {
            return {
                cards: res.data.articles.results.reduce(cardAdapter, []),
                cardsTotal: res.data.articles.total,
                stamp: stamp
            }
        })
    }
}

export const getFreshResults = (query, stamp) => {
    return {
        type: searchTypes.TYPE_SEARCH,
        payload: searchApi.getFreshData(query).then(res => {
            return {
                cards: res.data.articles.results.reduce(cardAdapter, []),
                cardsTotal: res.data.articles.total,
                stamp: stamp
            }
        })
    }
}

export const getPopularResults = (query, stamp) => {
    return {
        type: searchTypes.TYPE_SEARCH,
        payload: searchApi.getPopularData(query).then(res => {
            return {
                cards: res.data.articles.results.reduce(cardAdapter, []),
                cardsTotal: res.data.articles.total,
                stamp: stamp
            }
        })
    }
}

export const getDroplistData = (query, stamp) => {
    return {
        type: searchTypes.TYPE_DROPLIST,
        payload: searchApi.getDroplistData(query).then(res => {
            return {
                cards: res.data.articles.results.reduce(articleAdapterForSearch, []),
                cardsTotal: res.data.articles.total,
                tags: res.data.tags.results,
                tagsTotal: res.data.tags.total,
                stamp: stamp
            }
        })
    }
}

export const setSearchQuery = (state) => {
    return {
        type: searchTypes.SET_QUERY,
        payload: state,
    }
}
