const style = {
    tag: {
        border: '1px solid #999',
        paddingLeft: 4,
        paddingRight: 4,
        marginRight: 5
    },
    removeTag: {
        color: 'red',
        cursor: 'pointer',
        fontSize: 20
    },
    explainClose: {
        color: 'red'
    },
    codePath: {
        color: 'gray',
        marginLeft: '.5em'
    }
}
const dispatchText= `dispatch({
    type: 'REMOVE_TAG',
    // payload => UserActionData
    payload: {
        value: value
    }
})`
const dataText = `case 'REMOVE_TAG':
    state = state.filter(function (tag) {
        return tag.value !== payload.value
    })
break`

export default {
    style: style,
    text: {
        dispatch: dispatchText,
        data: dataText
    }
}
