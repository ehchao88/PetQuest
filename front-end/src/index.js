import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

export const TOKEN_KEY = 'tokentokentoken';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
};

export const isLogin = () => {
    return (localStorage.getItem(TOKEN_KEY));
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
