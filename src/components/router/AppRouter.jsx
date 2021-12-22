import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../routes";
import {HOME_ROUTE, SIGNIN_ROUTE} from "../../utils/const";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../index";


const AppRouter = () => {
    const {auth} = useContext(Context)
    let [user] = useAuthState(auth)

    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={HOME_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={SIGNIN_ROUTE}/>
            </Switch>
        )
};

export default AppRouter;