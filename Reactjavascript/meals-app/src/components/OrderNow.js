import React, { Component } from "react";
import Header from "./header/Header";

class OrderNow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h2>This is ordernow component</h2>
      </div>
    );
  }
}
export default OrderNow;
