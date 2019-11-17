import React from 'react';
// npm install react-bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// npm install materialize-css@next
import { Link } from 'react-router-dom'
import "./style/home.css"

class Home extends React.Component {
    render() {
        return <>
            <div className="container text-sm-center pt-10">
                <img id="header" src={ require("../assets/logo.gif")}/>
                <p>The virtual pet to-do list</p>
                <div className="btn-group mt-12" role="group" aria-label="Callout Buttons">
                    <Link to="/login" className="btn btn-primary">Login</Link>
                </div>
            </div>
        </>;
    }
}

export default Home;
