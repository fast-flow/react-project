import { combineReducers } from "redux"
import extend from "extend"
export default function (state = {}, action) {
    state = extend(true, {}, state)
    let payload = action.payload
    switch (action.type) {
        case 'email_REMOVE_EMAIL':
            // 若删除邮箱是选中邮箱则将选中邮箱改为第一个邮箱
            if (state.email === payload.email) {
                let firstEmail = payload.emailList.filter(function(item){
                    return item !== payload.email
                })[0] || ''
                state.email = firstEmail
            }
        break
        case 'send_CHANGE_EMAIL':
            state.email = payload.email
        break
        case 'send_CHANGE_CONTENT':
            state.content = payload.content
        break
        case 'send_SUBMIT_START':
            state.loading = true
        break
        case 'send_SUBMITTED':
        break
        case 'send_SUBMIT_END':
            state.loading = false
        break
    }
    return state
}
