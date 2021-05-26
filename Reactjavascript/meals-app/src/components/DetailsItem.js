import React, { Component } from "react";
import Header from "./header/Header";
import { Link } from "react-router-dom";
import { dummyMealsData } from "../constant/dummyMealsData";

class DetailsItem extends Component {
  constructor(props) {
    super(props);
  }

  getMeal() {
    const mealId = this.props.location.state.id;
    const meal = dummyMealsData.filter((meal) => meal.id === mealId);
    // console.log(meal);
    return meal[0];
  }
  render() {
    let meal = this.getMeal();
    console.log(meal);
    return (
      <div>
        <Header />
        <h2>This is detail items component</h2>

        {/* <h2>{this.props.location.state.id}</h2> */}
        <h2>
          <img src={meal.image_url}></img>
        </h2>
        <h2>{meal.name}</h2>
        <h2>
          {meal.currency} {meal.price}
        </h2>
        <h2>{meal.ingredients}</h2>

        {/* <h2>{this.props.location.state.name}</h2> */}
      </div>
    );
  }
}
export default DetailsItem;
