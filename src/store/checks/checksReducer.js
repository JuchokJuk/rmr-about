import { checkTypes } from '../constant'

const initialState = { 
    isRetina: false,
    isWebp: false,
    isOnline: true,
}

const ChecksReducer = (state = initialState, action) => {
    switch(action.type) {

        case checkTypes.SET_RETINA:
            return {
                ...state,
                isRetina: action.payload
            }

        case checkTypes.SET_ONLINE:
            return {
                ...state,
                isOnline: action.payload
            }
        default: 
            return state
    }
}

export { ChecksReducer }