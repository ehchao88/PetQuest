import React from 'react'
import Home from './home';
import Login from './login';
import Dashboard from './dashboard';
import {AuthProvider} from "./Auth";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
        </Switch>
    </Router>
);

export default Main;