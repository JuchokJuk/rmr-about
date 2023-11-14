import { axiosInstance } from '@api/instance';
import { sidebarUrl } from '@api/constants';

const getSidebarData = () => {
    return axiosInstance.get(sidebarUrl.sidebar)
}

export default {
    getSidebarData
}