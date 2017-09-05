import React, { PropTypes } from 'react'
import exampleExplain from "./exampleExplain"
const style = exampleExplain.style
class Explain extends React.Component {
    render () {
        return (
            <div>
                <h2>Explain</h2>
                <p>
                    Code flow
                </p>
                <ol>
                    <li>User Event: <code>click</code> <span style={style.explainClose} >&times;</span> </li>
                    <li>User action filter: <code>self.props.removeTag(UserActionData)</code></li>
                    <li>
                        Command:<code style={style.codePath}>view/redux/home/HomeProps.js</code>
                        <pre>{exampleExplain.text.dispatch}</pre>
                    </li>
                    <li>
                        Modify data:<code style={style.codePath} >view/redux/home/store/tabs/index.js</code>
                        <pre>{exampleExplain.text.data}</pre>
                    </li>
                    <li>
                        Update view
                    </li>
                </ol>
            </div>
        )
    }
}

export default Explain;
