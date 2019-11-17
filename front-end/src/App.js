import React from 'react';
import logo from './logo.svg';
import Main from './components/main';
import './App.css';

// firebase stuff
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from './components/firebase';

function App() {
  return (
    <div className="App">
        <Main className={"App-header"}/>
    </div>
  );
}

export default App;
