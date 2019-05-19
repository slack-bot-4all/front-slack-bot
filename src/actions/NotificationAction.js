import {NotificationConstants} from '../constants/actions'

const sendNotification = notification => dispatch =>{
    dispatch({ type: NotificationConstants.SEND_NOTIFICATION, notification: notification })
}

const sendNotificationSuccess = () => dispatch =>{
    dispatch(sendNotification('/success.gif'))
}

const sendNotificationError = () => dispatch =>{
    dispatch(sendNotification('/error.gif'))
}

const sendNotificationNotFound = () => dispatch =>{
    dispatch(sendNotification('/not_found.gif'))
}

const clearNotification = () => dispatch => {
    dispatch({ type: NotificationConstants.CLEAR_NOTIFICATION })
}

export const NotificationAction = {
    sendNotificationSuccess,
    sendNotificationError,
    sendNotificationNotFound,
    clearNotification,
}