import { careerTypes } from '../constant'
import { ActionType } from 'redux-promise-middleware';

const CARDS_PENDING = `${careerTypes.TYPE_CARDS}_${ActionType.Pending}`
const CARDS_FULFILLED = `${careerTypes.TYPE_CARDS}_${ActionType.Fulfilled}`
const CARDS_REJECTED = `${careerTypes.TYPE_CARDS}_${ActionType.Rejected}`

const PAGE_PENDING = `${careerTypes.TYPE_VACANCY}_${ActionType.Pending}`
const PAGE_FULFILLED = `${careerTypes.TYPE_VACANCY}_${ActionType.Fulfilled}`
const PAGE_REJECTED = `${careerTypes.TYPE_VACANCY}_${ActionType.Rejected}`

const initialState = {
    mainData: {
        cards: [],
        tags: {
            firstLevel: [],
            secondLevel: []
        },
        pageData: {
            firstHeader: '',
            firstDescription: '',
            video: null,
            videoPoster: null,
            videoCaption: null,
            secondHeader: '',
            secondDescription: '',
            notice: '',
            relatedArticles: null
        },
        isPending: false,
        isFulfilled: false,
        isRejected: false,
        error: {
            code: 0,
            message: ''
        },
    },
    filters: {
        firstToSecond: {},
        secondToFirst: {}
    },
    filteredData: {
        cards: [],
        selectedFilters: {
            firstLevel: [],
            secondLevel: []
        },
        availableFilters: {
            secondLevel: []
        }
    },
    vacancy: {
        data: {
            blocks: {},
            header: {},
            author: {},
            aboutTeam: {},
            advantages: {},
            tags: [],
            pubdate: "",
            seo: {},
            currentUrl: '',
            authorsToRefresh: [],
        },
        isPending: false,
        isFulfilled: false,
        isRejected: false,
        error: {
            code: 0,
            message: ''
        },
    }
}

const CareerReducer = (state = initialState, action) => {
    switch(action.type) {

        case CARDS_PENDING:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    isFulfilled: false,
                    isRejected: false,
                    isPending: true,
                    error: ''
                }
            };

        case CARDS_FULFILLED:
            return {
                ...state,
                mainData: {
                    cards: action.payload.cards,
                    tags: action.payload.tags,
                    pageData: action.payload.pageData,
                    isFulfilled: true,
                    isRejected: false,
                    isPending: false,
                    error: ''
                },
                filters: action.payload.filters,
                filteredData: {
                    ...state.filteredData,
                    availableFilters: action.payload.availableFilters,
                    cards: action.payload.cards,
                },
            };

        case CARDS_REJECTED:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    isFulfilled: false,
                    isRejected: true,
                    isPending: false,
                    error: action.payload.message
                },
            };


        case PAGE_PENDING:
            return {
                ...state,
                vacancy: {
                    ...state.vacancy,
                    isFulfilled: false,
                    isRejected: false,
                    isPending: true,
                    error: ''
                }
            };

        case PAGE_FULFILLED:
            return {
                ...state,
                vacancy: {
                    data: action.payload,
                    isFulfilled: true,
                    isRejected: false,
                    isPending: false,
                    error: ''
                }
            };

        case PAGE_REJECTED:
            return {
                ...state,
                vacancy: {
                    ...state.vacancy,
                    isFulfilled: false,
                    isRejected: true,
                    isPending: false,
                    error: action.payload.message
                },
            };

        case careerTypes.ADD_SELECTED_FILTER_FIRST:
            return {
                ...state,
                filteredData: {
                    ...state.filteredData,
                    cards: state.filteredData.cards,
                    selectedFilters: {
                        firstLevel: [...state.filteredData.selectedFilters.firstLevel, action.payload],
                        secondLevel: state.filteredData.selectedFilters.secondLevel
                    },
                }
            }

        case careerTypes.REMOVE_SELECTED_FILTER_FIRST:
            return {
                ...state,
                filteredData: {
                    ...state.filteredData,
                    cards: state.filteredData.cards,
                    selectedFilters: {
                        firstLevel: state.filteredData.selectedFilters.firstLevel.filter((item) => item._id !== action.payload),
                        secondLevel: state.filteredData.selectedFilters.secondLevel
                    }
                }
            }

        case careerTypes.CLEAR_SELECTED_FILTERS_FIRST:
            return {
                ...state,
                filteredData: {
                    ...state.filteredData,
                    cards: state.filteredData.cards,
                    selectedFilters: {
                        firstLevel: [],
                        secondLevel: state.filteredData.selectedFilters.secondLevel
                    }
                }
            }

        case careerTypes.ADD_SELECTED_FILTER_SECOND:
            return {
                ...state,
                filteredData: {
                    ...state.filteredData,
                    cards: state.filteredData.cards,
                    selectedFilters: {
                        firstLevel: state.filteredData.selectedFilters.firstLevel,
                        secondLevel: [...state.filteredData.selectedFilters.secondLevel, action.payload]
                    }
                }
            }

        case careerTypes.REMOVE_SELECTED_FILTER_SECOND:
            return {
                ...state,
                filteredData: {
                    ...state.filteredData,
                    cards: state.filteredData.cards,
                    selectedFilters: {
                        firstLevel: state.filteredData.selectedFilters.firstLevel,
                        secondLevel: state.filteredData.selectedFilters.secondLevel.filter((item) => item._id !== action.payload)
                    }
                }
            }

        case careerTypes.CLEAR_SELECTED_FILTERS_SECOND:
            return {
                ...state,
                filteredData: {
                    ...state.filteredData,
                    cards: state.filteredData.cards,
                    selectedFilters: {
                        firstLevel: state.filteredData.selectedFilters.firstLevel,
                        secondLevel: []
                    }
                }
            }

        case careerTypes.TOGGLE_AVAILABLE:
            return {
                ...state,
                filteredData: {
                    ...state.filteredData,
                    availableFilters: {
                        secondLevel: action.payload
                    }
                }
            }

        case careerTypes.SET_FILTERED_CARDS:
            return {
                ...state,
                filteredData: {
                    ...state.filteredData,
                    cards: action.payload
                }
            }

        default:
            return state
    }
}

export { CareerReducer }