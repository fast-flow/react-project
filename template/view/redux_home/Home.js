import React, { PropTypes } from 'react'

class Home extends React.Component {
    render () {
        return (
            <div>
                home
                {JSON.stringify(this.props.tags)}
            </div>
        )
    }
}

export default Home;
