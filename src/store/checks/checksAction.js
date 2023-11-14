import { checkTypes } from '../constant'

export const setRetina = (state) => {
    return {
        payload: state,
        type: checkTypes.SET_RETINA
    }
}

export const setOnline = (state) => {
    return {
        payload: state,
        type: checkTypes.SET_ONLINE
    }
}
