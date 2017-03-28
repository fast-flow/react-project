import { Component } from "react"
import { Link } from 'react-router'
class Send extends Component {
    render () {
        const self = this
        return (
            <div style={{padding: 10}} >
                <Link to="/">Email</Link>|<Link to="/send">Send</Link>
                <hr/>
                <form onSubmit={function(e) {
                        e.preventDefault()
                        self.props.onSubmit()
                    }}>
                    <select value={self.props.send.email} onChange={function(e) {
                        self.props.onChangeEmail(e.target.value)
                    }} >
                        {
                            self.props.email.list.map(function (item, key) {
                                return (
                                    <option key={key} value={item}>{item}</option>
                                )
                            })
                        }
                    </select>
                    {self.props.send.email}
                    <hr/>
                    <textarea value={self.props.send.content} onChange={function(e) {
                            self.props.onChangeContent(e.target.value)
                    }} />
                    <br/>
                    <button type="submit" disabled={self.props.send.loading} >Send</button>
                </form>
            </div>
        )
    }
}
export default Send
