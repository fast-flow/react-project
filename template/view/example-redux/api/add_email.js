import $ from "jquery"
/*
// EXMAPLE://
apiAdd_email.post(
    {
        email: email
    },
    {
        success: function () {
            dispatch({
                type: 'email_add_SUBMITTED',
                payload: {
                    email: email
                }
            })
        },
        error: function () {
            alert(res.msg)
        },
        always: function () {
            dispatch({
                type: 'email_add_SUBMIT_END'
            })
        }
    }
)
*/
import jqXHRcallback from "./util/jqXHRcallback"
const post = function (request, callback) {
    jqXHRcallback(
        $.ajax({
            type: 'post',
            url: '/example-redux/add_email',
            dataType: 'json',
            data: request
        }),
        callback
    )
}
export default { post: post }
