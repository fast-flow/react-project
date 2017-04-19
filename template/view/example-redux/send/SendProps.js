import $ from "jquery"
import apiSend from "../../api/send"
export default {
    mapStateToProps: function (state) {
        return {
            email: state.email,
            send: state.send
        }
    },
    mapDispatchToProps: function(dispatch) {
        return {
            onChangeEmail: function (email) {
                dispatch({
                    type: 'send_CHANGE_EMAIL',
                    payload: {
                        email: email
                    }
                })
            },
            onChangeContent: function (content) {
                dispatch({
                    type: 'send_CHANGE_CONTENT',
                    payload: {
                        content: content
                    }
                })
            },
            onSubmit: function () {
                return dispatch(function (dispatch, getState) {
                    let state = getState()
                    if (state.send.loading) {
                        return
                    }
                    if (!state.send.email) {
                        alert('请添加收件邮箱')
                        return
                    }
                    if(!state.send.content.trim()) {
                        alert('请填写内容')
                        return
                    }
                    dispatch({
                        type: 'send_SUBMIT_START'
                    })
                    apiSend.post(
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
                            always: function () {
                                dispatch({
                                    type: 'send_SUBMIT_END'
                                })
                            }
                        }
                    )
                })
            }
        }
    }
}
