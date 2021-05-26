import React, { Component } from "react";
import data from "../data.json";
// var data = require("../data.json");

// function searchingFor(term) {
//   return function (x) {
//     return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
//   };
// }

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      meals: data.meals,
      term: "",
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    console.log(event.target.value);
    this.props.searchMealsHandler(event.target.value);

    // this.setState({ term: event.target.value });
  }
  render() {
    const { term, meals } = this.state;

    return (
      <div>
        <div className="search">
          <input
            type="text"
            onChange={this.searchHandler}
            placeholder="Search meal items"
          ></input>
        </div>
        {/* {this.state.meals.filter(searchingFor(term)).map((mealItem) => (
          <div key={mealItem.id}>
            <h1>{mealItem.name}</h1>
          </div>
        ))} */}
      </div>
    );
  }
}
