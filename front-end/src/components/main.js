import React from 'react'
import Home from './home';
import Login from './login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
        </Switch>
    </Router>
);

export default Main;