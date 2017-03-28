import { connect } from "react-redux"
import App from "./Add"
import props from "./AddProps"
export default connect(props.mapStateToProps, props.mapDispatchToProps)(App)
