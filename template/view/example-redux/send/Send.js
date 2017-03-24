import { Component } from "react"
import Loading from "loading.react"
import { Link } from 'react-router'
class Send extends Component {
    render () {
        const self = this
        return (
            <div>
                <Link to="/" >email</Link>
                <h1>Send</h1>
                <Loading loading={self.props.send.loading} >
                    <select value={self.props.send.email} onChange={function (e) {
                            self.props.changeEmail(e.target.value)
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
                    <br />
                    <textarea value={self.props.send.content} onChange={function (e) {
                        self.props.changeContent(e.target.value)
                    }} />
                    <br />
                    <button type="button" onClick={self.props.sendEmail} >send</button>
                </Loading>
            </div>
        )
    }
}
export default Send
