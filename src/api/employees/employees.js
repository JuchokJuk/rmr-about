import { axiosInstance } from '@api/instance';
import { employeesUrl } from '@api/constants';

const getActualAuthors = (ids) => {
    const params = { 'id_in': [] }
    
    if(ids.length) {
        params['id_in'] = ids
    }
    
    return axiosInstance.get(`${employeesUrl.employees}/listbyids`, {
        params: params
    });
}

export default {
    getActualAuthors
}