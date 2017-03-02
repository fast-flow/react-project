import { Component } from "react"
import s from "./app-m.less"
import "../../m/btn/index.less"
class Example extends Component {
    constructor (props) {
        super(props)
        this.state = {
            ajaxText: ''
        }
    }
    sendAjax = () => {
        const self = this
        
    }
    render() {
        const self = this
        return (
            <div className={s.content} >
                react example
                <div className="m-btn" onClick={self.sendAjax} >ajax</div>
                <pre>{self.state.ajaxText}</pre>
            </div>
        )
    }
}
export default Example
