import extend from "extend"
import $ from "jquery"
import { createStore, combineReducers } from "redux"
const model = {
    mapStateToProps: function (state) {
        return {
            send: state.send,
            email: state.email
        }
    },
    mapDispatchToProps: function(dispatch) {
        return {
            changeEmail: function (value) {
                dispatch({
                    type: 'CHANGE_EMAIL',
                    payload: {
                        value: value
                    }
                })
            },
            changeContent: function (value) {
                dispatch({
                    type: 'CHANGE_CONTENT',
                    payload: {
                        value: value
                    }
                })
            },
            sendEmail: function () {
                dispatch(function (dispatch, getState) {
                    let state = getState()
                    if (state.send.loading) {
                        return
                    }
                    dispatch({
                        type: 'START_SEND'
                    })
                    let content = state.send.content
                    $.ajax({
                        type: 'post',
                        url: '/example-redux/send',
                        dataType: 'json',
                        data: {
                            content: content
                        }
                    }).done(function (res) {
                        if (res.status === 'success') {
                            dispatch({
                                type: 'SUCCESS_SEND'
                            })
                        }
                        else {
                            alert(res.msg)
                        }
                    }).always(function () {
                        dispatch({
                            type: 'END_SEND'
                        })
                    })
                })
            }
        }
    },
    reducers: function (state = {}, action) {
        let payload = action.payload
        state = extend(true, {}, state)
        switch(action.type) {
            case "CHANGE_CONTENT":
                state.content = payload.value
            break
            case 'CHANGE_EMAIL':
                state.email = payload.value
            break
            case "START_SEND":
                state.loading = true
            break
            case 'END_SEND':
                state.loading = false
            break
            case 'SUCCESS_SEND':
                state.content = ''
            break
            case 'REMOVE_EMAIL':
                if (payload.email === state.email) {
                    state.email = payload.firstEmail
                }
            break
        }
        return state
    }
}
export default model
