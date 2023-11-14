import { articleActionTypes } from '../constant'
import { ActionType } from 'redux-promise-middleware';

const DATA_PENDING = `${articleActionTypes.TYPE}_${ActionType.Pending}`
const DATA_FULFILLED = `${articleActionTypes.TYPE}_${ActionType.Fulfilled}`
const DATA_REJECTED = `${articleActionTypes.TYPE}_${ActionType.Rejected}`

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
        mainTag: '',
        authorsToRefresh: []
    }
}

const ArticlesReducer = (state = initialState, action) => {
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

export { ArticlesReducer }