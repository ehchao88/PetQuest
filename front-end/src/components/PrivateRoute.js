import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isLogin} from '../utils';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        // Show the dashboard only when the user is logged in
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                : <Redirect to="/login"/>
        )}/>
    );
};

export default PrivateRoute;