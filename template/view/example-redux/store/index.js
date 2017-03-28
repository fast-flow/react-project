import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

import preloadedState from "./preloadedState"
const reducers = combineReducers({
    email: require('./email/index').default,
    send: require('./send/index').default,
})

const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(
        applyMiddleware(ReduxThunk)
    )
)
export default store
