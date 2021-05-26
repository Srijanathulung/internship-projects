import React, { Component } from "react";
import { Header, Spinner, Counter } from "../../commons";
import Beer from "./Beer";
import { fetchBeers } from "../../../services/beerService";
import * as toast from "../../../utils/toast";
import InfiniteScroll from "react-infinite-scroll-component";

class BeerGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      pageInfo: { page: 0, size: 25 },
      hasMore: true,
      searchFor: "",
      hasFilter: false,
    };
  }

  scrollParentRef = null;

  fetchBeers = async () => {
    try {
      const { pageInfo, beers, searchFor, hasFilter } = this.state;
      let { page, size } = pageInfo;

      if (hasFilter) {
        page = 0;
      }
      console.log(searchFor);
      const data = await fetchBeers(page + 1, size, searchFor);
      console.log(data, searchFor);
      this.setState({
        beers: hasFilter ? data : [...beers, ...data],
        pageInfo: {
          ...pageInfo,
          page: data.length ? page + 1 : page,
        },
        hasMore: data.length ? true : false,
        hasFilter: false,
      });
    } catch (error) {
      const errorMsg = error.response.data.message;
      toast.error({ title: "oh!snap", message: errorMsg });
    }
  };

  setSearchText = (searchText) => {
    console.log(searchText);
    this.setState(
      {
        searchFor: searchText,
        hasFilter: true,
      },
      () => {
        this.fetchBeers();
      }
    );
  };
  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    const { beers, hasMore } = this.state;
    return (
      <div>
        <Header setSearchText={this.setSearchText} />

        <main>
          <div className="container" ref={(r) => (this.scrollParentRef = r)}>
            <Counter />
            <InfiniteScroll
              dataLength={beers.length}
              next={this.fetchBeers} //console.log("jdkdkjsfj")
              hasMore={hasMore}
              loader={<Spinner />}
            >
              {beers.map((beer) => (
                <Beer key={beer.id} info={beer} />
              ))}
            </InfiniteScroll>
          </div>
        </main>
      </div>
    );
  }
}
export default BeerGrid;
