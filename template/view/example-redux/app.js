import { Component } from "react"
import { createStore, combineReducers } from "redux"
import { Provider, connect} from "react-redux"
import Email, {emailModel} from "./email/index"
import { composeWithDevTools } from 'redux-devtools-extension'
let preloadedState = {
    email: {
        list: ['mail@qq.com', 'nimo@163.com', '123123@163.com'],
        add: {
            value: 'abc'
        }
    }
}
let reducers = combineReducers({
    email: emailModel.reducers
})
const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools()
)
class App extends Component {
    render () {
        return (
            <Email />
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
