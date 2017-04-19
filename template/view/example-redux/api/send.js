import $ from "jquery"
/*
// EXMAPLE://
send.post(
    {
        email: state.send.email,
        content: state.send.content
    },
    {
        success: function () {
            dispatch({
                type: 'send_SUBMITTED'
            })
            alert('发送成功')
        },
        error: function () {
            alert(res.msg)
        },
        fail: function () {

        },
        always: function () {
            dispatch({
                type: 'send_SUBMIT_END'
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
            url: '/example-redux/send',
            data: request,
            dataType: 'json'
        }),
        callback
    )
}
export default { post: post }
