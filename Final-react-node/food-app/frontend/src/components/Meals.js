import React, { Component } from "react";
import formatCurrency from "../util";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
// import { connect } from "react-redux";

class Meals extends Component {
  constructor() {
    super();
    this.state = {
      product: null,
    };
  }
  openModal = (meal) => {
    this.setState({ meal });
  };
  closeModal = () => {
    this.setState({ meal: null });
  };
  render() {
    const { meal } = this.state;
    return (
      <div>
        {/* <Fade bottom cascade={true}> */}
        <ul className="foods">
          {this.props.meals.map((meal) => (
            <li key={meal.id}>
              <div className="food">
                <a href={"#" + meal.id} onClick={() => this.openModal(meal)}>
                  <img src={meal.image_url} alt={meal.name}></img>
                  <p>{meal.name}</p>
                </a>
                <div className="meal-price">
                  <div>{formatCurrency(meal.price)}</div>
                  <button
                    onClick={() => this.props.addToCart(meal)}
                    className="button primary"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* </Fade> */}
        {meal && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="meal-details">
                <img src={meal.image_url} alt={meal.name}></img>
              </div>
              <div className="meal-details-description">
                <p>
                  <strong>{meal.name}</strong>
                </p>
                <p>{meal.types}</p>
                <p>{meal.ingredients}</p>
                <div className="meal-price">
                  <div>{formatCurrency(meal.price)}</div>
                  <button
                    className="button primary"
                    onClick={() => {
                      this.props.addToCart(meal);
                      this.closeModal();
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
export default Meals;
  