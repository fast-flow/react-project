import { connect } from "react-redux"
import sendModel from "./model"
export default connect(sendModel.mapStateToProps, sendModel.mapDispatchToProps)(require('./Send').default)
export { sendModel }
