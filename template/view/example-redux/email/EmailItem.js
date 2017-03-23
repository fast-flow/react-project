import { Component } from "react"
class EmailItem extends Component {
    render () {
        const self = this
        return (
            <li>
                <button onClick={function(){
                    self.props.removeEmail(self.props.email)
                }}>remove</button>{' '}{self.props.email}
            </li>
        )
    }
}
export default EmailItem
