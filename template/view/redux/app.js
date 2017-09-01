import { Component } from "react"
import { Router, Route, hashHistory } from 'react-router';
import { Provider} from "react-redux"
import Home from "../redux_home/index"
import store from "./store/index"
class App extends Component {
    render () {
        return (
            <Provider store={store} >
                <Router history={hashHistory} >
                    <Route path="/" component={Home} />
                </Router>
            </Provider>
        )
    }
}
export default App
