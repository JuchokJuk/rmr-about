import { breakpointTypes } from '../constant'

const initialState = { 
    breakpoint: 0
}

const BreakpointReducer = (state = initialState, action) => {
    switch(action.type) {
        case breakpointTypes.SET_BREAKPOINT:
            return {
                breakpoint: action.payload
            }
        default: 
            return state
    }

}

export { BreakpointReducer }