import { modalState } from "../constant"

export const showContactModal = (state) => {
    return {
        payload: state,
        type: modalState.IS_OPEN,
    }
}

export const toggleMenu = (state) => {
    return {
        payload: state,
        type: modalState.MOBILE_MENU_IS_OPEN,
    }
}

export const toggleScrollLock = (state) => {
    return {
        payload: state,
        type: modalState.TOGGLE_SCROLL,
    }
}

export const toggleTagsModal = (state) => {
    return {
        payload: state,
        type: modalState.TOGGLE_TAGS_MODAL,
    }
}

export const toggleGdprModal = (state) => {
    return {
        payload: state,
        type: modalState.TOGGLE_GDPR,
    }
}

export const toggleHelloModal = (state) => {
    return {
        payload: state,
        type: modalState.TOGGLE_HELLO,
    }
}

export const toggleSearchModal = (state) => {
    return {
        payload: state,
        type: modalState.SEARCH_IS_OPEN,
    }
}
export const toggleEmailingModal = (state) => {
    return {
        payload: state,
        type: modalState.EMAILING_IS_OPEN,
    }
}
export const toggleDisplayEmailingHeader = (state) => {
    return {
        payload: state,
        type: modalState.TOGGLE_DISPLAY_EMAILING_HEADER,
    }
}
