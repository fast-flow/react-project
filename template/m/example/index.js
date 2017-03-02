import { Component, PropTypes } from "react"
import "./index.less"
import classnames from "classnames"
class Example extends Component {
    render() {
        const self = this
        return (
            <div className={classnames({
                "m-example": true,
                [self.props.className]: self.props.className
            })}>
                Example
            </div>
        )
    }
}
Example.defaultProps = {
    className: undefined
}
Example.propTypes = {
    className: PropTypes.string
}
export default Example
