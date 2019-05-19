import React from 'react'
import {Button, Col, Row} from 'antd'
import {connect} from 'react-redux'
import {NotificationAction} from '../actions/NotificationAction'
import {LoadingAction} from '../actions/LoadingAction'

class Index extends React.Component {

    success = () => {
        this.props.dispatch(NotificationAction.sendNotificationSuccess())
    }

    error = () => {
        this.props.dispatch(NotificationAction.sendNotificationError())
    }

    notFound = () => {
        this.props.dispatch(NotificationAction.sendNotificationNotFound())
    }

    loading = () => {
        this.props.dispatch(LoadingAction.loading())
    }

    render() {
        return (
            <div align="center">
                <Row type="flex" justify="center" align="center">
                    <Col sm={2}>
                        <Button type="primary" onClick={this.success}>Success</Button>
                    </Col>
                    <Col sm={2}>
                        <Button type="danger" onClick={this.error}>Error</Button>
                    </Col>
                    <Col sm={2}>
                        <Button type="ghost" onClick={this.notFound}>Not found</Button>
                    </Col>
                    <Col sm={2}>
                        <Button type="dashed" onClick={this.loading}>Loading</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect()(Index)