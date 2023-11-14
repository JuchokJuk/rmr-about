import { cardsTypes } from '../constant'
import { ActionType } from 'redux-promise-middleware';

const DATA_PENDING = `${cardsTypes.TYPE}_${ActionType.Pending}`
const DATA_FULFILLED = `${cardsTypes.TYPE}_${ActionType.Fulfilled}`
const DATA_REJECTED = `${cardsTypes.TYPE}_${ActionType.Rejected}`

const initialState = {
    isFulfilled: false,
    isRejected: false,
    isPending: false,
    error: {
        code: 0,
        message: ''
    },
    totalItems: 0,
    itemsRecieved: 0,
    items: [],
    filters: {
        available: [],
        all: []
    },
    promo: [],
}

const CardsReducer = (state = initialState, action) => {
    switch(action.type) {

        case DATA_PENDING:
            return {
                ...state,
                isPending: true
            };

        case DATA_FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                items: action.payload.items,
                totalItems: action.payload.totalItems,
                itemsRecieved: action.payload.itemsRecieved,
                filters: action.payload.filters,
                promo: action.payload.promo,
                isPending: false
            };

        case DATA_REJECTED:
            return {
                ...state,
                isRejected: true,
                error: {
                    code: action.payload.response.status,
                    message: action.payload.message
                }
            };

        default: 
            return state
    }

}

export { CardsReducer }