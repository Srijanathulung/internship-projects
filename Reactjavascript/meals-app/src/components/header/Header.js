import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constant/router";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-pink">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            MEALS APP
          </a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <Link to={routes.HOME} title="home">
                  Home
                </Link>
              </li>
              <li>
                <Link to={routes.CART} title="cart">
                  Cart
                </Link>
              </li>

              <li>
                <Link to={routes.ORDERNOW} title="order now">
                  Order Now
                </Link>
                {/* 
                <Link
                  to={{
                    pathname: routes.ORDERNOW,
                  }}
                >
                  Order Now
                </Link> */}
              </li>
            </ul>
            {/* <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul> */}
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
