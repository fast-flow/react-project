import { Component } from "react"
import EmailItem from "./EmailItem"
import EmailAdd from "./add/index"
class Email extends Component {
    render () {
        const self = this
        return (
            <div>
                <ul>
                    {
                        self.props.list.map(function(item, key) {
                            return (
                                <EmailItem key={key} email={item} removeEmail={self.props.removeEmail}  />
                            )
                        })
                    }
                </ul>
                <hr />
                <EmailAdd />
            </div>
        )
    }
}
export default Email
