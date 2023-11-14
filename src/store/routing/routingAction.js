import { routingTypes} from '../constant'

export const setLastVisitTag = (state) => {
    return {
        payload: state,
        type: routingTypes.LAST_VISIT_TAG
    }
}
