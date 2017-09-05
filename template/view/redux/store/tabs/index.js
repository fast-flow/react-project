import { combineReducers } from "redux"
import extend from "extend"
export default function (state = [], action) {
    state = extend(true, [], state)
    let payload = action.payload
    switch (action.type) {
        case 'REMOVE_TAG':
            state = state.filter(function (tag) {
                return tag.value !== payload.value
            })
        break
    }
    return state
}
