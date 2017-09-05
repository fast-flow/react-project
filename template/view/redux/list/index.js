import { connect } from "react-redux"
import App from "./List"
import props from "./ListProps"
export default connect(props.mapStateToProps, props.mapDispatchToProps)(App)
