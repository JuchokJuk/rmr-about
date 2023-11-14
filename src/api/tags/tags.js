import { axiosInstance } from '@api/instance';
import { tagsUrl } from '@api/constants';

const getTagsData = () => {
    return axiosInstance.get(tagsUrl.all)
}

export default {
    getTagsData
}