import { Component } from "react"
import s from "./app-m.less"
import "../../m/btn/index.less"
import $ from "jquery"
class Example extends Component {
    constructor (props) {
        super(props)
        this.state = {
            ajaxText: ''
        }
    }
    sendAjax = () => {
        const self = this
        $.ajax({
            type: 'post',
            url: '/example_some',
            dataType: 'json'
        }).done(function (res) {
            self.setState({
                ajaxText: JSON.stringify(res)
            })
        })
    }
    render() {
        const self = this
        return (
            <div className={s.content} >
                <img src={require('./logo.png')} alt=""/>
                react example
                <div className="m-btn" onClick={self.sendAjax} >ajax</div>
                <pre>{self.state.ajaxText}</pre>
            </div>
        )
    }
}
export default Example
