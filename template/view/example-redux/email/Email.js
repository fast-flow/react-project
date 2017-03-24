import { Component } from "react"
import EmailItem from "./EmailItem"
import EmailAdd from "./add/index"
import { Link } from 'react-router'
class Email extends Component {
    render () {
        const self = this
        return (
            <div>
                <Link to="/send" >send</Link>
                <h1>Email</h1>
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
