import { combineReducers } from "redux"
import extend from "extend"
export default function (state = [], action) {
    state = extend(true, [], state)
    let payload = action.payload
    switch (action.type) {
        case 'ADD_TAGS':
        break
    }
    return state
}
