import { aboutActionTypes, newAboutPage } from "../constant";
import { ActionType } from "redux-promise-middleware";

const DATA_PENDING = `${aboutActionTypes.TYPE}_${ActionType.Pending}`;
const DATA_FULFILLED = `${aboutActionTypes.TYPE}_${ActionType.Fulfilled}`;
const DATA_REJECTED = `${aboutActionTypes.TYPE}_${ActionType.Rejected}`;

const initialState = {
    isFulfilled: false,
    isRejected: false,
    error: {
        code: 0,
        message: "",
    },
    data: {
        blocks: {},
        header: {},
        author: {},
        tags: [],
        pubdate: "",
        seo: {},
        currentUrl: "",
    },
    visibilityMobileMenu: false,
    currentDomain: {
        name: null,
        notSelectName: [],
        status: false,
    },
    refRedBlock: null,
    blockPlay: false,
    videos: {
        planet: {
            normal: null,
            reversed: null
        },
        desktop: {
            cube1: {
                normal: null,
                reversed: null
            },
            cube2: {
                normal: null,
                reversed: null
            },
            cube3: {
                normal: null,
                reversed: null
            }
        },
        tablet: {
            cube1: {
                normal: null,
                reversed: null
            },
            cube2: {
                normal: null,
                reversed: null
            },
            cube3: {
                normal: null,
                reversed: null
            }
        }
    },
    videosStatus: {
        current: 'desktop',
        common: false,
        desktop: false,
        tablet: false
    },
    heroSliderDelayed: false,
    explosionDelayed: false,
    bigBusinessDelayed: false,
    slidesDelayed: false
};

const AboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_PENDING:
            return state;

        case DATA_FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                data: action.payload,
            };

        case DATA_REJECTED:
            return {
                ...state,
                isRejected: true,
                error: {
                    code: action.payload.response.status,
                    message: action.payload.message,
                },
            };
        case newAboutPage.CHANGE_VISIBILITY_MOBILE_MENU:
            return {
                ...state,
                visibilityMobileMenu: action.payload,
            };

        case newAboutPage.SET_REF_RED_BLOCK:
            return {
                ...state,
                refRedBlock: action.payload,
            };

        case newAboutPage.SET_PLAY_BLOCK:
            return {
                ...state,
                blockPlay: action.payload,
            };

        case newAboutPage.SET_VIDEOS:
            return {
                ...state,
                videos: {
                    ...state.videos,
                    ...action.payload
                }
            };

        case newAboutPage.SET_VIDEOS_STATUS:
            return {
                ...state,
                videosStatus: {
                    ...state.videosStatus,
                    ...action.payload
                }
            };

        case newAboutPage.SET_HERO_SLIDER_DELAYED:
            return {
                ...state,
                heroSliderDelayed: action.payload,
            };

        case newAboutPage.SET_BIG_BUSINESS_DELAYED:
            return {
                ...state,
                bigBusinessDelayed: action.payload,
            };

        case newAboutPage.SET_EXPLOSION_DELAYED:
            return {
                ...state,
                explosionDelayed: action.payload,
            };

        case newAboutPage.SET_SLIDES_DELAYED:
            return {
                ...state,
                slidesDelayed: action.payload,
            };

        default:
            return state;
    }
};

export { AboutReducer };
