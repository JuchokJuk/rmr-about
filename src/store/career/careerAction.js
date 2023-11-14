import careerApi from '@api/career';
import { articleAdapter } from '@helpers/Adapters/ArticleAdapter';
import { careerPageAdapter } from '@helpers/Adapters/CareerAdapter';
import { careerTypes } from '../constant';

const host = process.env.NEXT_PUBLIC_SITE_URL

export const initCards = () => {
    return {
        type: careerTypes.TYPE_CARDS,
        payload: careerApi.getCareerPage().then(result => careerPageAdapter(result.data))
    }
}

export const initVacancy = (slug) => {
    return {
        type: careerTypes.TYPE_VACANCY,
        payload: careerApi.getVacancyBySlug(slug)
            .then(result => articleAdapter(result.data, `${host}career/${slug}`))
    }
}

export const addSelectedFilter = (filter, level) => {
    return {
        type: level ? careerTypes.ADD_SELECTED_FILTER_SECOND : careerTypes.ADD_SELECTED_FILTER_FIRST,
        payload: filter
    }
}

export const removeSelectedFilter = (filter_id, level) => {
    return {
        type: level ? careerTypes.REMOVE_SELECTED_FILTER_SECOND : careerTypes.REMOVE_SELECTED_FILTER_FIRST,
        payload: filter_id
    }
}

export const clearSelectedFilters = (level) => {
    return {
        type: level ? careerTypes.CLEAR_SELECTED_FILTERS_SECOND : careerTypes.CLEAR_SELECTED_FILTERS_FIRST,
    }
}

export const setAvailableSecondLevel = (filters) => {
    return {
        type: careerTypes.TOGGLE_AVAILABLE,
        payload: filters
    }
}

export const setFilteredCards = (cards) => {
    return {
        type: careerTypes.SET_FILTERED_CARDS,
        payload: cards
    }
}