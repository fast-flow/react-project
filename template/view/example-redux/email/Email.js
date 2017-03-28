import { Component } from "react"
import EmailItem from "./item/Item"
import { Link } from 'react-router'
import Add from "./add/index"
class Email extends Component {
    render () {
        const self = this
        return (
            <div style={{padding: 10}} >
                <Link to="/">Email</Link>|<Link to="/send">Send</Link>
                <dl>
                    <dt>Email</dt>
                    {
                        self.props.list.map(function(item, key) {
                            return (
                                <EmailItem key={key} email={item} onRemove={self.props.removeEmail}  />
                            )
                        })
                    }
                </dl>
                <hr/>
                <Add />
            </div>
        )
    }
}
export default Email
