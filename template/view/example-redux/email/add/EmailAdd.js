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
                <input type="text" value={self.props.value} onChange={self.props.changeValue} />
                <Loading loading={self.props.loading} >
                    <button type="submit" >add</button>
                </Loading>
            </form>
        )
    }
}
export default EmailAdd
