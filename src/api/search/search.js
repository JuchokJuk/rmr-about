import { axiosInstance } from '@api/instance';
import { searchUrl } from '@api/constants';

const getInitialData = () => {
    return axiosInstance.get(`${searchUrl.popular}`)
}

const getSearchData = (query) => {
    return axiosInstance.get(`${searchUrl.search}/${encodeURIComponent(query)}?_limit=30`)
}

const getDroplistData = (query) => {
    return axiosInstance.get(`${searchUrl.droplist}/${encodeURIComponent(query)}?_limit=8`)
}

const getFreshData = (query) => {
    return axiosInstance.get(`${searchUrl.search}/${encodeURIComponent(query)}?_sort=time&_limit=30`)
}

const getPopularData = (query) => {
    return axiosInstance.get(`${searchUrl.search}/${encodeURIComponent(query)}?_sort=view&_limit=30`)
}

export default {
    getInitialData,
    getSearchData,
    getFreshData,
    getPopularData,
    getDroplistData,
}