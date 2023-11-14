import { employeesActionTypes } from '../constant'
import { ActionType } from 'redux-promise-middleware';

const DATA_PENDING = `${employeesActionTypes.TYPE}_${ActionType.Pending}`
const DATA_FULFILLED = `${employeesActionTypes.TYPE}_${ActionType.Fulfilled}`
const DATA_REJECTED = `${employeesActionTypes.TYPE}_${ActionType.Rejected}`

const initialState = {
    isFulfilled: false,
    isRejected: false,
    error: {
        code: 0,
        message: ''
    },
    apiEmployees: {}
}

const EmployeesReducer = (state = initialState, action) => {
    switch(action.type) {

        case DATA_PENDING:
            return state;

        case DATA_FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                apiEmployees: action.payload.byId,
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

export { EmployeesReducer }