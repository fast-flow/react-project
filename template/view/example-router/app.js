import { Component } from "react"
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import componentLoader from "./componentLoader"
import Head from "./Head"
class Wrap extends Component {
    render() {
        return (
            <div>
                <Head />
                {this.props.children}
            </div>
        )
    }
}
import NotFound from "./notfound/app"
class ExmapleRouter extends Component {
    render() {
        return (
            <Router history={hashHistory} >
                <Route path="/" component={Wrap}>
                    <IndexRoute getComponent={componentLoader('home')} />
                    <Route path="about" getComponent={componentLoader('about')} />
                    <Route path="inbox" getComponent={componentLoader('inbox')} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        )
    }
}
export default ExmapleRouter
