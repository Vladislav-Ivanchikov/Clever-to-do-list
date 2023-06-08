import React, {useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../index";
import {privateRoutes, publicRoutes} from "../../routes";
import {HOME_ROUTE, SIGNIN_ROUTE} from "../../utils/const";

const AppRouter = () => {
    const {auth} = useContext(Context)
    let [user] = useAuthState(auth)

    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact={true}/>
                )}
                <Route
                    path="*"
                    element={<Navigate to={HOME_ROUTE} replace />}
                />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact={true}/>
                )}
                <Route
                    path="*"
                    element={<Navigate to={SIGNIN_ROUTE} replace />}
                    />
            </Routes>
        )
};

export default AppRouter;