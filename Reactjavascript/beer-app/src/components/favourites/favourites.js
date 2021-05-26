import React from "react";
import { connect } from "react-redux";

import Header from "../commons/header/Header";
import Beer from "../main/beers/Beer";

class Favourites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFor: "",
    };
  }

  setSearchText = (SearchText) => {
    this.setState({
      searchFor: SearchText,
    });
  };

  render() {
    let { favouriteBeers } = this.props;

    if (this.state.searchFor) {
      favouriteBeers = favouriteBeers.filter((beer) =>
        beer.name
          .toLowerCase()
          .includes(this.state.searchFor.toLocaleLowerCase())
      );
    }

    return (
      <div className="wrapper">
        <Header setSearchText={this.setSearchText} />

        <main>
          <div className="container">
            {!!favouriteBeers.length &&
              favouriteBeers.map((beer) => <Beer key={beer.id} info={beer} />)}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ favouriteBeerReducer }) => {
  return { favouriteBeers: favouriteBeerReducer.favouriteBeers };
};

export default connect(mapStateToProps)(Favourites);
