import { connect } from "react-redux"
import App from "./Email"
import props from "./EmailProps"
export default connect(props.mapStateToProps, props.mapDispatchToProps)(App)
