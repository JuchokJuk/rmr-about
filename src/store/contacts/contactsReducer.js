import { contactsActionTypes } from '../constant'
import { ActionType } from 'redux-promise-middleware';

const DATA_PENDING = `${contactsActionTypes.TYPE}_${ActionType.Pending}`
const DATA_FULFILLED = `${contactsActionTypes.TYPE}_${ActionType.Fulfilled}`
const DATA_REJECTED = `${contactsActionTypes.TYPE}_${ActionType.Rejected}`

const initialState = { 
    isFulfilled: false,
    isRejected: false,
    error: null,
    pageData: {},
}

const ContactsReducer = (state = initialState, action) => {

    switch(action.type) {
        case DATA_PENDING:
            return state;

        case DATA_FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                pageData: action.payload,
            };

        case DATA_REJECTED:
            return {
                ...state,
                isRejected: true,
                error: action.payload.message
            };

        default: 
            return state
    }

}

export { ContactsReducer }