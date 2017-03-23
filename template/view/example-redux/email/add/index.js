import { connect } from "react-redux"
import EmailAdd from "./EmailAdd"
import emailAddModel from "./model"
export default connect(emailAddModel.mapStateToProps, emailAddModel.mapDispatchToProps)(EmailAdd)
export { emailAddModel }
