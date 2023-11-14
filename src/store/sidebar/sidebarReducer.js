import { sidebarActionTypes } from '../constant'
import { ActionType } from 'redux-promise-middleware';

const DATA_PENDING = `${sidebarActionTypes.TYPE}_${ActionType.Pending}`
const DATA_FULFILLED = `${sidebarActionTypes.TYPE}_${ActionType.Fulfilled}`
const DATA_REJECTED = `${sidebarActionTypes.TYPE}_${ActionType.Rejected}`

const initialState = { 
    isOpen: true,
    wasDispatched: false,
    cards: [],
    sizes: [],
    ping: 0,
    isFulfilled: false,
    isRejected: false,
    error: null
}

const SideBarReducer = (state = initialState, action) => {

    switch(action.type) {
        case DATA_PENDING:
            return state;

        case DATA_FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                cards: action.payload,
            };

        case DATA_REJECTED:
            return {
                ...state,
                isRejected: true,
                error: action.payload.message
            };

        case sidebarActionTypes.IS_OPEN: 
            return {
                ...state,
                isOpen: action.payload,
                wasDispatched: true,
            }

        case sidebarActionTypes.SET_SIZES:
            return { 
                ...state,
                sizes: action.payload,
            }

        case sidebarActionTypes.PING_SIZES:
            return {
                ...state,
                ping: Date.now(),
            }

        default: 
            return state
    }

}

export { SideBarReducer }