import $ from "jquery"
export default {
    mapStateToProps: function (state) {
        return {
            tags: state.tags
        }
    },
    mapDispatchToProps: function(dispatch) {
        return {
            removeTag: function (value) {
                dispatch({
                    type: 'REMOVE_TAG',
                    payload: {
                        value: value
                    }
                })
            }
        }
    }
}
