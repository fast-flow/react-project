import extend from "extend"
export default function (state = [], action) {
    state = extend(true, [], state)
    let payload = action.payload
    switch (action.type) {
        case 'email_REMOVE_EMAIL':
            state = state.filter(function (item) {
                return item !== payload.email
            })
        break
        case 'email_add_SUBMITTED':
            state = state.concat([payload.email])
        break
    }
    return state
}
