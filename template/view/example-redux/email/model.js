import extend from "extend"
import { createStore, combineReducers } from "redux"
import EmailAddModel from "./add/model"
const model = {
    mapStateToProps: function (state) {
        return state.email
    },
    mapDispatchToProps: function(dispatch) {
        return {
            removeEmail: function (email) {
                dispatch(function(dispatch, getState) {
                    let state = getState()
                    let firstEmail = state.email.list
                    if (firstEmail.length) {
                        firstEmail = ''
                    }
                    else {
                        firstEmail = firstEmail[0]
                    }
                    dispatch({
                        type: 'REMOVE_EMAIL',
                        payload: {
                            email: email,
                            firstEmail: firstEmail
                        }
                    })
                })
            }
        }
    },
    reducers: combineReducers({
        list: function (state = [], action) {
            let payload = action.payload
            // redux 不可变更新模式
            // http://cn.redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
            state = extend(true, [], state)
            switch (action.type) {
                case "REMOVE_EMAIL":
                    state = state.filter(function (item) {
                        return item !== payload.email
                    })
                break
                case 'ADD_EMAIL':
                    state = state.concat([payload.value])
                break
                default:
            }
            return state
        },
        add: EmailAddModel.reducers
    })
}
export default model
