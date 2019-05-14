import React from "react"
import { Route } from "react-router-dom"

const AppRoute = ({ component: Component, layout: Layout, title, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout history={rest.history} title={title}>
            <Component {...props} />
        </Layout>
    )} />
)

export default AppRoute