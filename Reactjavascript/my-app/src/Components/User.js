import React, { Component } from "react";
import "../App.css";
import withRedBull from "../hoc/withRedBull";

class User extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="cards">
        <p>{this.props.name}</p>
        {this.props.wings ? <p>I achieved wings</p> : <p> I have no wings</p>}
        <button onClick={this.props.flyAway}>Click me</button>
      </div>
    );
  }
}

export default withRedBull(User);
// {this.props.name}
