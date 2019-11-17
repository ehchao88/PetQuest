import React from 'react';
// npm install react-bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// npm install materialize-css@next
import 'materialize-css/dist/css/materialize.min.css'

class Home extends React.Component {
    render() {
        return <>
            <div className="container text-sm-center pt-10">
                <h1 className="display-2">PetQuest</h1>
                <p className="lead">The virtual pet to-do list</p>
                <div className="btn-group mt-12" role="group" aria-label="Callout Buttons">
                    <button type="button" className="btn btn-primary btn-danger" href={"/login"}>Login</button>
                </div>
            </div>
        </>;
    }
}

export default Home;