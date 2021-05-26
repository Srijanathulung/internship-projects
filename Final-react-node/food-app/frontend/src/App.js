import React from "react";
import Cart from "./components/Cart";
import Meals from "./components/Meals";
import Search from "./components/Search";
import data from "./data.json";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5000/`,
});

api.get("/").then((res) => {
  console.log(res.data);
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meals: data.meals,
      cartItems: [],
    };
  }

  searchingFor = (term) => {
    return (x) => {
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    };
  };

  searchMealsHandler = (term) => {
    let meals = data.meals.slice();
    this.setState({
      meals: meals.filter(this.searchingFor(term)),
    });
  };

  createOrder = (order) => {
    alert("Need to save order for" + order.name);
  };
  removeFromCart = (meal) => {
    const cartItems = this.state.cartItems.slice();
    this.setState(
      {
        cartItems: cartItems.filter((x) => x.id !== meal.id),
      },
      function () {
        localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
      }
    );
  };
  addToCart = (meal) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === meal.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...meal, count: 1 });
    }
    this.setState({ cartItems }, function () {
      localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
    });
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <div>
            <a href="#">Food-app</a>
          </div>
        </header>

        <main>
          <div className="content">
            <div className="main">
              <Search
                item={this.state.item}
                searchMealsHandler={this.searchMealsHandler}
              />
              <Meals meals={this.state.meals} addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <Cart
                // cartItems={this.state.cartItems}
                cartItems={
                  this.state.cartItems.length
                    ? this.state.cartItems
                    : JSON.parse(localStorage.getItem("cartItems"))
                }
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>Good Food Good Mood</footer>
      </div>
    );
  }
}

export default App;
