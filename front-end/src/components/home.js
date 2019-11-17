import React from 'react';
// npm install react-bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// npm install materialize-css@next
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return <>
            <div className="container text-sm-center pt-10">
                <h1 className="display-2">PetQuest</h1>
                <p className="lead">The virtual pet to-do list</p>
                <div className="btn-group mt-12" role="group" aria-label="Callout Buttons">
                    <Link to="/login" className="btn btn-primary">Login</Link>
                </div>
            </div>
        </>;
    }
}

export default Home;