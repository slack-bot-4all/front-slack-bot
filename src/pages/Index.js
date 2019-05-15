import React from 'react'
import { Button } from 'antd'

class Index extends React.Component {

    onClick = link => {
        this.props.history.push(link)
    }

    render() {
        return (
            <div align="center">
                <h2>Slack BOT</h2>
                <Button onClick={this.props.toggleLoading}>Loading</Button>
            </div>
        )
    }
}

export default Index