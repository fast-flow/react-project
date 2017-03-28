import { Component } from "react"
import Loading from "loading.react"
class EmailAdd extends Component {
    render () {
        const self = this
        return (
            <form onSubmit={function (e) {
                e.preventDefault()
                self.props.addEmail(self.props.value)
            }} >
                <input type="text" value={self.props.value} onChange={function (e) {
                    self.props.changeValue(e.target.value)
                }} /><button disabled={self.props.loading} type="submit" >add</button>
            </form>
        )
    }
}
export default EmailAdd
