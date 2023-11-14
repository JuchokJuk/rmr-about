import { axiosInstance } from '@api/instance';
import { aboutUrl } from '@api/constants';

const getAboutData = () => {
    return axiosInstance.get(aboutUrl.about)
}

export default {
    getAboutData
}