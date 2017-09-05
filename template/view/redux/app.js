import { Component } from "react"
import { Router, Route, hashHistory, Link } from 'react-router';
import { Provider} from "react-redux"
import Home from "./home/index"
import List from "./list/index"
import store from "./store/index"
class NotFound extends Component {
    render () {
        return (
            <div>
                Not found
                <Link to="/" >Home</Link>
            </div>
        )
    }
}
class App extends Component {
    render () {
        return (
            <Provider store={store} >
                <Router history={hashHistory} >
                    <Route path="/" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="*" component={NotFound} />
                </Router>
            </Provider>
        )
    }
}
export default App
