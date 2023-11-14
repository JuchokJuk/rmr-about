import { paginationTypes} from '../constant'

export const setPagination = (state) => {
    return {
        payload: state,
        type: paginationTypes.SET_PAGE
    }
}
