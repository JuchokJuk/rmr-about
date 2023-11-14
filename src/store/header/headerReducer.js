import { headerTypes } from '../constant'

const initialState = { 
    headerRef: null
}

const HeaderReducer = (state = initialState, action) => {
    switch(action.type) {
        case headerTypes.SET_HEADER_REF:
            return {
                headerRef: action.payload
            }
        default: 
            return state
    }

}

export { HeaderReducer }