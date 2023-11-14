import employeesApi from '@api/employees';
import { employeesActionTypes } from '../constant';

export const initActualAuthors = (ids) => {
    return {
        type: employeesActionTypes.TYPE,
        payload: employeesApi.getActualAuthors(ids).then(result => {
            return {
                byId: Object.assign({}, ...result.data.map(emp => ({ [emp._id]: emp })))
            }
        })
    }
}
