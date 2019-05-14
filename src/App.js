import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes'

const App = ({history}) => (
  <ConnectedRouter history={history}>
     <React.Fragment>
        <Routes history={history} />
     </React.Fragment>
  </ConnectedRouter>
)

App.propTypes = {
  history: PropTypes.object.isRequired,
}

export default App
