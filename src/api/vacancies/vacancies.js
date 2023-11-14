import { axiosInstance } from '@api/instance';
import { vacanciesUrl, limits } from '@api/constants';

const getVacanicesData = (filters, page) => {
    const params = { '_limit': limits.vacancies }

    if (filters) {
        params["subtags.id_in"] = filters
    }

    if (page) {
        params['_limit'] = page * limits.vacancies
    }

    return axiosInstance.get(vacanciesUrl.vacancies, {
        params: params
    })
}

const getVacancyData = (slug) => {
    return axiosInstance.get(`${vacanciesUrl.vacancies}/slug/${slug}`)
}

export default {
    getVacanicesData,
    getVacancyData
}