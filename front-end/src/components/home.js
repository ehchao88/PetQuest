import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import firebase from "firebase";
import logo from "../assets/logo.png";

class Home extends React.Component {
  render() {
    return (true ? <Feed /> : <Landing />);
    // hardcode for now
  }
}

function Landing(props) {
  return (
    <div className="container text-sm-center pt-10">
      <h1 className="display-2">PetQuest</h1>
      <p className="lead">The virtual pet to-do list</p>
      <img src={logo} style={imageStyle} alt="PetQuest Logo" />
      <br />
      <div
        className="btn-group mt-12"
        role="group"
        aria-label="Callout Buttons"
      >
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    // load in the todos
    const defaultDatabase = firebase.database().ref("users");
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map(number => <li>{number}</li>);

    return <ul>{listItems}</ul>;
  }
}

const imageStyle = {
  height: 250,
  width: 250,
  margin: 10
};

export default Home;
