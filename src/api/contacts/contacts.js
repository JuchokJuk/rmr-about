import { axiosInstance } from '@api/instance';
import { contactUrl } from '@api/constants';

const getContactsData = () => {
    return axiosInstance.get(contactUrl.contacts)
}

export default {
    getContactsData
}