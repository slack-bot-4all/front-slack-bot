import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import notification from './notification'
import loading from './loading'

export default (history) => combineReducers({
  router: connectRouter(history),
  // rest of your reducers
  notification,
  loading
})