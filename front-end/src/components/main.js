import React from 'react'
import Home from './home';
import Login from './login';
import { AuthProvider } from "./Auth";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Main = () => (
    <AuthProvider>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/login' component={Login}></Route>
            </Switch>
        </Router>
    </AuthProvider>
);

export default Main;