import { vacanciesActionTypes } from '../constant'
import { ActionType } from 'redux-promise-middleware';

const DATA_PENDING = `${vacanciesActionTypes.TYPE}_${ActionType.Pending}`
const DATA_FULFILLED = `${vacanciesActionTypes.TYPE}_${ActionType.Fulfilled}`
const DATA_REJECTED = `${vacanciesActionTypes.TYPE}_${ActionType.Rejected}`

const initialState = {
    isFulfilled: false,
    isRejected: false,
    error: {
        code: 0,
        message: ''
    },
    data: {
        blocks: {},
        header: {},
        author: {},
        tags: [],
        pubdate: "",
        seo: {},
        currentUrl: '',
        authorsToRefresh: []
    }
}

const VacanciesReducer = (state = initialState, action) => {
    switch(action.type) {

        case DATA_PENDING:
            return state;

        case DATA_FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                data: action.payload,
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

export { VacanciesReducer }