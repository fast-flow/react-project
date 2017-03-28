import { Component } from "react"
import { Router, Route, hashHistory } from 'react-router';
import { Provider} from "react-redux"

import store from "./store/index"
import Email from "./email/index"
import Send from "./send/index"
class App extends Component {
    render () {
        return (
            <Provider store={store} >
                <Router history={hashHistory} >
                    <Route path="/" component={Email} />
                    <Route path="/send" component={Send} />
                </Router>
            </Provider>
        )
    }
}
export default App
