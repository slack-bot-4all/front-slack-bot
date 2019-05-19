import React from 'react'
import { connect } from 'react-redux'

import { Animated } from 'react-animated-css'
import { NotificationAction } from '../../actions/NotificationAction'
import Sticker from './Sticker'

class Notification extends React.Component {

    closeInFiveSeconds = () => {
        setTimeout(() => {
            this.props.dispatch(NotificationAction.clearNotification())
        }, 5000)
    }

    render() {

        const { notifier, notification } = this.props
        if (notifier) {
            this.closeInFiveSeconds()
        }
        return (
            <React.Fragment>
                <Animated animationIn="fadeIn" animationOut="zoomOutDown" animationOutDuration={1200} className="sticker" style={{ bottom: 0 }} isVisible={!notifier}>
                    <Sticker defaultSticker/>
                </Animated>
                {
                    notifier &&
                    <Animated animationIn="zoomInUp" animationInDelay={200} className="sticker" style={{ bottom: 0 }} isVisible={notifier}>
                        <Sticker sticker={notification} defaultSticker={false}/>
                    </Animated>
                }

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        notifier: state.notification.notifier,
        notification: state.notification.notification
    }
}

export default connect(mapStateToProps)(Notification)