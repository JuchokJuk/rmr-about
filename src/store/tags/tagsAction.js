import { tagsActionTypes } from '../constant'
import tagsApi from '@api/tags';

export const pingTags = () => {
    return {
        type: tagsActionTypes.PING_SELECTED_TAGS
    }
}

export const pingFilter = () => {
    return {
        type: tagsActionTypes.PING_SELECTED_FILTERS
    }
}

export const initTags = () => {
    return {
        type: tagsActionTypes.TYPE,
        payload: tagsApi.getTagsData().then(result => {
            return {
                tags: result.data,
                default: result.data.filter(item => item.isDefault),
                byUrl: Object.assign({}, ...result.data.map(tag => ({[tag.url]: tag})) ) 
            }
        })
    }
}

export const setSelectedUrl = (id) => {
    return {
        type: tagsActionTypes.SET_SELECTED,
        payload: id
    }
}

export const initTagsBuffer = (initValue = null) => {
    return {
        type: tagsActionTypes.SET_TAGS_BUFFER,
        payload: initValue
    }
}

export const setSelectedTags = () => {
    return {
        type: tagsActionTypes.COPY_TAGS_BUFFER
    }
}

export const addSelectedTag = (tag) => {
    return {
        type: tagsActionTypes.ADD_SELECTED_TAG,
        payload: tag
    }
}

export const removeSelectedTag = (tag_id) => {
    return {
        type: tagsActionTypes.REMOVE_SELECTED_TAG,
        payload: tag_id
    }
}

export const addSelectedFilter = (filter) => {
    return {
        type: tagsActionTypes.ADD_SELECTED_FILTER,
        payload: filter
    }
}

export const removeSelectedFilter = (filter_id) => {
    return {
        type: tagsActionTypes.REMOVE_SELECTED_FILTER,
        payload: filter_id
    }
}

export const clearSelectedFilters = () => {
    return {
        type: tagsActionTypes.CLEAR_SELECTED_FILTERS,
    }
}
