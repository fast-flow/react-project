import { connect } from "react-redux"
import Email from "./Email"
import emailModel from "./model"
export default connect(emailModel.mapStateToProps, emailModel.mapDispatchToProps)(Email)
export { emailModel }
