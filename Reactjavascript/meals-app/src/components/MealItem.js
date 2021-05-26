import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../constant/router";

class MealItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.meal.image_url}></img>
        <h1>
          {
            <Link
              to={{
                pathname: routes.DETAILSITEM,
                state: {
                  id: this.props.meal.id,
                  // name: this.props.meal.name,
                },
              }}
            >
              {this.props.meal.name}
            </Link>
          }
        </h1>
        <h1>
          {this.props.meal.currency} {this.props.meal.price}
        </h1>
        <div className="buttons">
          <button className="btn1">add to cart</button>
        </div>
      </div>
    );
  }
}
export default MealItem;
