import { Component } from "react"
import { Link } from 'react-router'
class Head extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                |
                <Link to="/about">About</Link>
                |
                <Link to="/inbox">inbox</Link>
                |
                <Link to={"/not" + new Date().getTime()}>not found</Link>
            </div>
        )
    }
}
export default Head
