import { Component } from "react"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Router, Route, hashHistory } from 'react-router';
import { Provider, connect} from "react-redux"
import Email, {emailModel} from "./email/index"
import Send, {sendModel} from "./send/index"
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
let preloadedState = {
    email: {
        list: ['mail@qq.com', 'nimo@163.com', 'master@163.com'],
        add: {
            value: 'abc',
            loading: false
        }
    },
    send: {
        loading: false,
        email: 'mail@qq.com',
        content: ''
    }
}
let reducers = combineReducers({
    email: emailModel.reducers,
    send: sendModel.reducers
})
const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(
        applyMiddleware(ReduxThunk)
    )
)
class App extends Component {
    render () {
        return (
            <Router history={hashHistory} >
                <Route path="/" component={Email} />
                <Route path="/send" component={Send} />
            </Router>
        )
    }
}

class Root extends Component {
    render () {
        return (
            <Provider store={store} >
                <App />
            </Provider>
        )
    }
}
export default Root
