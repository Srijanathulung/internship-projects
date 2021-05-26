import React, { Component } from "react";
import Header from "./header/Header";
// import { dummyMealsData } from "../constant/dummyMealsData";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h2>This is cart component</h2>
      </div>
    );
  }
}
export default Cart;
