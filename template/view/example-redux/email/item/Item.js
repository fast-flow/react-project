import { Component } from "react"
import s from "./index-m.less"
class EmailItem extends Component {
    render () {
        const self = this
        return (
            <dd>
                <span className={s.remove} onClick={function() {
                        self.props.onRemove(self.props.email)
                    }} ></span>
                <span className={s.email} >{self.props.email}</span>
            </dd>
        )
    }
}
export default EmailItem
