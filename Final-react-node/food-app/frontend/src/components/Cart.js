import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      showCheckout: false,
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };

  render() {
    let { cartItems, order } = this.props;
    cartItems = cartItems ? cartItems : [];
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
        )}
        <div>
          <div className="cart">
            <Fade left cascade={true}>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div>
                      <img src={item.image_url} alt={item.name}></img>
                    </div>
                    <div>
                      <div>{item.name}</div>
                      <div className="right">
                        {formatCurrency(item.price)}x{item.count}
                        <button
                          className="button"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>

          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      cartItems.reduce(
                        (acc, curr) => acc + curr.price * curr.count,
                        0
                      )
                    )}
                  </div>
                  <button
                    onClick={() => {
                      this.setState({ showCheckOut: true });
                    }}
                    className="button primary"
                  >
                    Confirm
                  </button>
                </div>
              </div>
              {this.state.showCheckOut && (
                <Fade right cascade={true}>
                  <div className="cart">
                    <form onSubmit={this.createOrder}>
                      <ul className="form-container">
                        <li>
                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <button className="button primary" type="submit">
                            Confirm order
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </Fade>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
