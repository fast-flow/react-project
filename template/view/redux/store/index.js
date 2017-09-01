import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

import preloadedState from "./preloadedState"
const reducers = combineReducers({
    tags: require('./tabs/index').default,
})

const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(
        applyMiddleware(ReduxThunk)
    )
)
export default store
