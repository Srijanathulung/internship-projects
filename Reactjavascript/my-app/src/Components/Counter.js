import React, { Component } from "react";
import { isVowel } from "../utils/string";
import "./counter.css";

class Counter extends Component {
  constructor(props) {
    console.log(props);
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="cards">
        <h3 className={isVowel(this.props.name[0]) ? "red" : "blue"}>
          {this.props.name}
        </h3>
        <div className="buttons">
          <h4>count={this.state.count}</h4>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
