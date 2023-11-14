import { modalState } from "../constant"

const initialState = {
    removeScroll: false,
    emailingHeader: {
        display: true,
    },
    emailing: {
        isOpen: false,
    },
    contact: {
        isOpen: false,
    },
    mobileMenu: {
        isOpen: false,
    },
    tags: {
        isOpen: false,
    },
    gdpr: {
        isOpen: false,
    },
    hello: {
        isOpen: false,
    },
    search: {
        isOpen: false,
    },
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case modalState.MOBILE_MENU_IS_OPEN:
            return {
                ...state,
                mobileMenu: {
                    isOpen: action.payload,
                },
            }

        case modalState.IS_OPEN:
            return {
                ...state,
                contact: {
                    isOpen: action.payload,
                },
            }

        case modalState.TOGGLE_SCROLL:
            return {
                ...state,
                removeScroll: action.payload,
            }

        case modalState.TOGGLE_TAGS_MODAL:
            return {
                ...state,
                tags: {
                    isOpen: action.payload,
                },
            }

        case modalState.TOGGLE_GDPR:
            return {
                ...state,
                gdpr: {
                    isOpen: action.payload,
                },
            }

        case modalState.TOGGLE_HELLO:
            return {
                ...state,
                hello: {
                    isOpen: action.payload,
                },
            }

        case modalState.SEARCH_IS_OPEN:
            return {
                ...state,
                search: {
                    isOpen: action.payload,
                },
            }
        case modalState.EMAILING_IS_OPEN:
            return {
                ...state,
                emailing: {
                    isOpen: action.payload,
                },
            }
        case modalState.TOGGLE_DISPLAY_EMAILING_HEADER:
            return {
                ...state,
                emailingHeader: {
                    display: action.payload,
                },
            }

        default:
            return state
    }
}

export { ModalReducer }
