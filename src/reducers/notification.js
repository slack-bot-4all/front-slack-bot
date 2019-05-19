import { NotificationConstants } from './../constants/actions'

export default (state = {}, action) => {
    switch (action.type) {
        case NotificationConstants.SEND_NOTIFICATION:
            return { ...state, notification: action.notification, notifier: true }
        case NotificationConstants.CLEAR_NOTIFICATION:
            const { notification, ...stateWithoutNotification } = state
            return { ...stateWithoutNotification, notifier: false }
        default:
            return state
    }
}
