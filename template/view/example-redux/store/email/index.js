import { combineReducers } from "redux"
export default combineReducers({
    list: require('./list').default,
    add: require('./add').default
})
