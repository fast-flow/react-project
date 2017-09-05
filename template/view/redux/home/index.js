import { connect } from "react-redux"
import App from "./Home"
import props from "./HomeProps"
export default connect(props.mapStateToProps, props.mapDispatchToProps)(App)
