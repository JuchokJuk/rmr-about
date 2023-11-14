import { paginationTypes } from '../constant'

const initialState = { 
    currentPage: 1,
}

const PaginationReducer = (state = initialState, action) => {
    switch(action.type) {

        case paginationTypes.SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }

        default: 
            return state
    }
}

export { PaginationReducer }