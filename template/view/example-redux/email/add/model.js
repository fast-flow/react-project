import extend from "extend"
import { createStore, combineReducers } from "redux"
const model = {
    mapStateToProps: function (state) {
        return {
            value: state.email.add.value
        }
    },
    mapDispatchToProps: function(dispatch) {
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
                dispatch({
                    type: 'ADD_EMAIL',
                    payload: {
                        value: email
                    }
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
            case 'ADD_EMAIL':
                state.value = ''
            break
        }
        return state
    }
}
export default model
