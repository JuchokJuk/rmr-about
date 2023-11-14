import { tagsActionTypes } from '../constant'
import { ActionType } from 'redux-promise-middleware';

const DATA_PENDING = `${tagsActionTypes.TYPE}_${ActionType.Pending}`
const DATA_FULFILLED = `${tagsActionTypes.TYPE}_${ActionType.Fulfilled}`
const DATA_REJECTED = `${tagsActionTypes.TYPE}_${ActionType.Rejected}`

const initialState = { 
    allTags: {
        isFulfilled: false,
        isRejected: false,
        error: null,
        data: [],
        byUrl: {}
    },
    selectedTags: [],
    selectedBuffer: [],
    selectedTagsPing: null,
    selectedFiltersPing: null,
    selectedFilters: [],
    activeUrl: null
}

const TagsReducer = (state = initialState, action) => {

    switch(action.type) {
        case DATA_PENDING:
            return state;

        case DATA_FULFILLED:
            return {
                ...state,
                allTags: {
                    ...state.allTags,
                    isFulfilled: true,
                    data: action.payload.tags,
                    byUrl: action.payload.byUrl,
                },
                selectedTags: action.payload.default,
            };

        case DATA_REJECTED:
            return {
                ...state,
                
                allTags: {
                    ...state.allTags,
                    isRejected: true,
                    error: action.payload.message,
                }
            };

        case tagsActionTypes.SET_SELECTED:
            return {
                ...state,
                activeUrl: action.payload
            }

        case tagsActionTypes.COPY_TAGS_BUFFER:
            return {
                ...state,
                selectedTags: state.selectedBuffer,
                selectedBuffer: [],
            }

        case tagsActionTypes.SET_TAGS_BUFFER:
            return {
                ...state,
                selectedBuffer: action.payload ? action.payload : state.selectedTags,
            }

        case tagsActionTypes.ADD_SELECTED_TAG:
            return {
                ...state,
                selectedBuffer: [...state.selectedBuffer, action.payload],
            }

        case tagsActionTypes.REMOVE_SELECTED_TAG:
            return {
                ...state,
                selectedBuffer: state.selectedBuffer.filter((item) => item._id !== action.payload),
            }

        case tagsActionTypes.PING_SELECTED_TAGS:
            return {
                ...state,
                selectedTagsPing: Date.now(),
            }

        case tagsActionTypes.PING_SELECTED_FILTERS:
            return {
                ...state,
                selectedFiltersPing: Date.now(),
            }

        case tagsActionTypes.ADD_SELECTED_FILTER:
            return {
                ...state,
                selectedFilters: [action.payload]
            }

        case tagsActionTypes.REMOVE_SELECTED_FILTER:
            return {
                ...state,
                selectedFilters: state.selectedFilters.filter((item) => item._id !== action.payload)
            }
        
        case tagsActionTypes.CLEAR_SELECTED_FILTERS:
            return {
                ...state,
                selectedFilters: []
            }

        default: 
            return state
    }
}

export { TagsReducer }