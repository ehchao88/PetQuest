import React from "react";
import firebase from "firebase";

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

export default Feed;
