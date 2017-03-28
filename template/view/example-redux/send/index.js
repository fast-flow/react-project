import { connect } from "react-redux"
import App from "./Send"
import props from "./SendProps"
export default connect(props.mapStateToProps, props.mapDispatchToProps)(App)
