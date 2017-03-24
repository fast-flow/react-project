import extend from "extend"
import $ from "jquery"
import { createStore, combineReducers } from "redux"
const model = {
    mapStateToProps: function (state) {
        return {
            value: state.email.add.value,
            loading: state.email.add.loading,
        }
    },
    mapDispatchToProps: function(dispatch, ownProps) {
        return {
            changeValue: function (e) {
                dispatch({
                    type: 'CHANGE_VALUE',
                    payload: {
                        value: e.target.value
                    }
                })
            },
            addEmail: function (email) {
                dispatch(function (dispatch, getState) {
                    let state = getState()
                    if (state.email.add.loading) {
                        return
                    }
                    dispatch({
                        type: 'START_ADD_EMAIL'
                    })
                    $.ajax({
                        url: '/example-redux/add_email',
                        type: 'post',
                        dataType: 'json',
                        data: {
                            email: email
                        }
                    }).done(function (res) {
                        if (res.status === 'success') {
                            dispatch({
                                type: 'ADD_EMAIL',
                                payload: {
                                    value: email
                                }
                            })
                        }
                        else {
                            alert(res.msg)
                        }
                    }).always(function () {
                        dispatch({
                            type: 'END_ADD_EMAIL'
                        })
                    })

                })
            }
        }
    },
    reducers: function (state = {value: ''}, action) {
        state = extend(true, {}, state)
        let payload = action.payload
        switch(action.type) {
            case 'CHANGE_VALUE':
                state.value = payload.value
            break
            case 'START_ADD_EMAIL':
                state.loading = true
            break
            case 'ADD_EMAIL':
                state.value = ''
            break
            case 'END_ADD_EMAIL':
                state.loading = false
            break
        }
        return state
    }
}
export default model
