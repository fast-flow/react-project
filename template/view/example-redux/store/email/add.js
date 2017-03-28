import extend from "extend"
export default function (state = {}, action) {
    state = extend(true, {}, state)
    let payload = action.payload
    switch (action.type) {
        case 'email_add_CHANGE_VALUE':
            state.value = payload.email
        break
        case 'email_add_SUBMIT_START':
            state.loading = true
        break
        case 'email_add_SUBMITTED':
            state.value = ''
        break
        case 'email_add_SUBMIT_END':
            state.loading = false
        break
    }
    return state
}
