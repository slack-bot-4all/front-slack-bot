import React from 'react'
import { Switch, Redirect } from 'react-router'

/* Import components */
import AppRoute from './components/AppRouter'
import MainLayout from './layouts/MainLayout'

/* Import pages */
import Index from './pages/Index'

const Routes = ({ history }) => (
    <Switch>
        <AppRoute layout={MainLayout} history={history} exact path="/" component={Index} title="Home"/>
        <Redirect to="/" />
    </Switch>
)

export default Routes