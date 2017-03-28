export default {
    mapStateToProps: function (state) {
        return state.email
    },
    mapDispatchToProps: function(dispatch) {
        return {
            removeEmail: function (email) {
                return dispatch(function (dispatch, getState) {
                    // 通过 react-thunk 的 getState 获取到 state 传到到 email_REMOVE_EMAIL
                    let state = getState()
                    dispatch({
                        type: 'email_REMOVE_EMAIL',
                        payload: {
                            email: email,
                            emailList: state.email.list
                        }
                    })
                })
            }
        }
    }
}
