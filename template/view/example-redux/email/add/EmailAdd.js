import { Component } from "react"
class EmailAdd extends Component {
    render () {
        const self = this
        return (
            <form onSubmit={function (e) {
                e.preventDefault()
                self.props.addEmail(self.props.value)
            }} >
                <input type="text" value={self.props.value} onChange={self.props.changeValue} />
                <button type="submit" >add</button>
            </form>
        )
    }
}
export default EmailAdd
