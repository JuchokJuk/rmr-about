import { searchTypes } from "@store/constant";
import { ActionType } from 'redux-promise-middleware';

const INIT_PENDING = `${searchTypes.TYPE_INIT}_${ActionType.Pending}`
const INIT_FULFILLED = `${searchTypes.TYPE_INIT}_${ActionType.Fulfilled}`
const INIT_REJECTED = `${searchTypes.TYPE_INIT}_${ActionType.Rejected}`

const SEARCH_PENDING = `${searchTypes.TYPE_SEARCH}_${ActionType.Pending}`
const SEARCH_FULFILLED = `${searchTypes.TYPE_SEARCH}_${ActionType.Fulfilled}`
const SEARCH_REJECTED = `${searchTypes.TYPE_SEARCH}_${ActionType.Rejected}`

const DROPLIST_PENDING = `${searchTypes.TYPE_DROPLIST}_${ActionType.Pending}`
const DROPLIST_FULFILLED = `${searchTypes.TYPE_DROPLIST}_${ActionType.Fulfilled}`
const DROPLIST_REJECTED = `${searchTypes.TYPE_DROPLIST}_${ActionType.Rejected}`

const initialState = {
    initialData: {
        cards: [],
        tags: [],
        queries: [],
        isFulfilled: false,
        isRejected: false,
        isPending: false,
        error: '',
    },
    searchData: {
        cards: [],
        cardsTotal: 0,
        stamp: 0,
        isFulfilled: false,
        isRejected: false,
        isPending: false,
        error: '',
    },
    dropList: {
        cards: [],
        stamp: 0,
        isFulfilled: false,
        isRejected: false,
        isPending: false,
        error: '',
    },
    searchQuery: '',
};

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {

        case searchTypes.SET_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            }

        case INIT_PENDING:
            return {
                ...state,
                initialData: {
                    ...state.initialData,
                    isFulfilled: false,
                    isRejected: false,
                    isPending: true,
                    error: ''
                }
            }

        case INIT_FULFILLED:
            return {
                ...state,
                initialData: {
                    ...state.initialData,
                    cards: action.payload.cards,
                    tags: action.payload.tags,
                    queries: action.payload.queries,
                    isFulfilled: true,
                    isRejected: false,
                    isPending: false,
                    error: ''
                },
            };

        case INIT_REJECTED:
            return {
                ...state,
                initialData: {
                    ...state.initialData,
                    isFulfilled: false,
                    isRejected: true,
                    isPending: false,
                    error: action.payload.message
                },
            };

        case SEARCH_PENDING:
            return {
                ...state,
                searchData: {
                    ...state.searchData,
                    // cards: [],
                    // cardsTotal: 0,
                    isFulfilled: false,
                    isRejected: false,
                    isPending: true,
                    error: ''
                }
            }

        case SEARCH_FULFILLED:
            return {
                ...state,
                searchData: (action.payload.stamp > state.searchData.stamp) ? {
                    ...state.searchData,
                    cards: action.payload.cards,
                    cardsTotal: action.payload.cardsTotal,
                    stamp: action.payload.stamp,
                    isFulfilled: true,
                    isRejected: false,
                    isPending: false,
                    error: ''
                } : state.searchData,
            };

        case SEARCH_REJECTED:
            return {
                ...state,
                searchData: {
                    ...state.searchData,
                    isFulfilled: false,
                    isRejected: true,
                    isPending: false,
                    error: action.payload.message
                },
            };

        case DROPLIST_PENDING:
            return {
                ...state,
                dropList: {
                    ...state.dropList,
                    // cards: [],
                    isFulfilled: false,
                    isRejected: false,
                    isPending: true,
                    error: ''
                }
            }

        case DROPLIST_FULFILLED:
            return {
                ...state,
                dropList: (action.payload.stamp > state.dropList.stamp) ? {
                    ...state.dropList,
                    cards: action.payload.cards,
                    cardsTotal: action.payload.cardsTotal,
                    tags: action.payload.tags,
                    tagsTotal: action.payload.tagsTotal,
                    stamp: action.payload.stamp,
                    isFulfilled: true,
                    isRejected: false,
                    isPending: false,
                    error: ''
                } : state.dropList,
            };

        case DROPLIST_REJECTED:
            return {
                ...state,
                dropList: {
                    ...state.dropList,
                    isFulfilled: false,
                    isRejected: true,
                    isPending: false,
                    error: action.payload.message
                },
            };

        default:
            return state
    }
}

export { SearchReducer }