import { routingTypes } from '../constant'

const initialState = { 
    lastVisitedTag: '',
}

const RoutingReducer = (state = initialState, action) => {
    switch(action.type) {

        case routingTypes.LAST_VISIT_TAG:
            return {
                ...state,
                lastVisitedTag: action.payload,
            }

        default: 
            return state
    }
}

export { RoutingReducer }