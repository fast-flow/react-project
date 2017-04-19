import $ from "jquery"
import apiAdd_email from "../../api/add_email"
export default {
    mapStateToProps: function (state) {
        return state.email.add
    },
    mapDispatchToProps: function (dispatch) {
        return {
            addEmail: function (email) {
                // 异步 dispatch 基于 redux-thunk
                return dispatch(function (dispatch, getState) {
                    let state = getState()
                    if (state.email.add.loading) {
                        return
                    }
                    if (!/^\s*([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,20})\s*$/.test(email)) {
                        alert('邮址格式错误')
                        return
                    }
                    dispatch({
                        type: 'email_add_SUBMIT_START'
                    })
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
                })
            },
            changeValue: function (email) {
                dispatch({
                    type: 'email_add_CHANGE_VALUE',
                    payload: {
                        email: email
                    }
                })
            }
        }
    }
}
