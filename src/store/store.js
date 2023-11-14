import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { rootReducer } from './rootReducer'

const middlewares = [
    thunkMiddleware,
    promise,
]

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        // const { createLogger } = require(`redux-logger`)
        const devMiddleware = [
            // createLogger({
            //     collapsed: true
            // })
        ]

        return composeWithDevTools(applyMiddleware(...middleware, ...devMiddleware))
    }
    return applyMiddleware(...middleware) 
}

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        // preserve value on client side navigation
        // TODO: фильтры, выбранные теги и другие состояния сторов нужно дописать
        nextState.checks.isOnline = state.checks.isOnline
        nextState.breakpoint = state.breakpoint
        nextState.sidebar.isOpen = state.sidebar.isOpen
        nextState.sidebar.sizes = state.sidebar.sizes
        nextState.sidebar.wasDispatched = state.sidebar.wasDispatched
        if (state.tags.selectedTags.length !== 0 || state.tags.selectedTagsPing) {
            nextState.tags.selectedTags = state.tags.selectedTags
        }
        nextState.tags.selectedTagsPing = state.tags.selectedTagsPing
        nextState.tags.selectedFiltersPing = state.tags.selectedFiltersPing
        if (state.tags.selectedFilters.length !== 0 || state.tags.selectedFiltersPing) {
            nextState.tags.selectedFilters = state.tags.selectedFilters
        }
        nextState.modals = state.modals

        if (state.career.filteredData.cards.length !== 0 && 
            (state.career.filteredData.selectedFilters.firstLevel.length !== 0 || 
            state.career.filteredData.selectedFilters.secondLevel.length !== 0)) {
                
            nextState.career.filteredData = state.career.filteredData
        }
        nextState.routing.lastVisitedTag = state.routing.lastVisitedTag

        nextState.search.initialData = state.search.initialData
        nextState.about.videos = state.about.videos
        nextState.about.videosStatus = state.about.videosStatus
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

const initStore = () => {
    return createStore(reducer, bindMiddleware(middlewares))
}

export const storeWrapper = createWrapper(initStore)
