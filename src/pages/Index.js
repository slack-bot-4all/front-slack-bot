import React from 'react'

class Index extends React.Component {

    onClick = link => {
        this.props.history.push(link)
    }

    render() {
        return (
            <div align="center">
                <h2>Slack BOT</h2>
                <div style={{ height: 2000 }}></div>
                <button onClick={this.props.toggleLoading}>Loading</button>
            </div>
        )
    }
}

export default Index