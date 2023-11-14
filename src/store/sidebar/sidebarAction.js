import {sidebarActionTypes} from '../constant'
import sidebarApi from '@api/sidebar';

export const showSidebar = (state) => {
    return {
        payload: state,
        type: sidebarActionTypes.IS_OPEN
    }
}

export const setSizes = (sizes) => {
    return {
        payload: sizes,
        type: sidebarActionTypes.SET_SIZES
    }
}

export const pingSizes = () => {
    return {
        type: sidebarActionTypes.PING_SIZES
    }
}


export const initSidebar = () => {
    return {
        type: sidebarActionTypes.TYPE,
        payload: sidebarApi.getSidebarData().then(result => result.data)
    }
}