import { axiosInstance , mockInstance } from '@api/instance';
import { careerUrl } from '@api/constants';
import { careerData } from '../../assets/careerData.js'
import { vacancyData } from '../../assets/vacancyData.js'

if (process.env.NEXT_PUBLIC_USE_MOCK == 'true') {
    mockInstance.onGet(`${careerUrl.career}`).reply(200, careerData);
    const url = new RegExp(`${careerUrl.career}/*`);
    mockInstance.onGet(url).reply(200, vacancyData);
}

const getCareerPage = () => {
    return axiosInstance.get(`${careerUrl.career}`)
}


const getVacancyBySlug = (slug) => {
    return axiosInstance.get(`${careerUrl.career}/${encodeURIComponent(slug)}`)
}


export default {
    getCareerPage,
    getVacancyBySlug
}