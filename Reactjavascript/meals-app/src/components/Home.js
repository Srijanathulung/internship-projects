import React, { Component } from "react";
import { dummyMealsData } from "../constant/dummyMealsData";
import MealItem from "./MealItem";
import "./Home.css";
import Header from "./header/Header";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="cards clearfix">
          {dummyMealsData.map((item, index) => {
            return <MealItem meal={item} />;
          })}
        </div>
      </div>
    );
  }
}
export default Home;

// let x = 4
// let y = x;
