import React from "react";
import {Route,Switch} from 'react-router-dom'
import {routes} from "./routes";

export const router = () => {
    return (
        <Switch>
            {
                routes.map((value => {
                    return (
                        <Route key={value.path} path={value.path} component={value.component} exact={value.exact}/>
                    )
                }))
            }
        </Switch>

    )
}