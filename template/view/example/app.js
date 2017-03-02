import { Component } from "react"
import s from "./app-m.less"
import "../../m/btn/index.less"
class Example extends Component {
    render() {
        return (
            <div className={s.content} >
                react example
                <div className="m-btn">btn</div>
            </div>
        )
    }
}
export default Example
