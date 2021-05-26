import React from "react";

const withRedBull = (WrapperContainer) => {
  class WithContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        wings: null,
      };
    }
    flyAway = () => {
      this.setState({ wings: "Achieved" });
    };

    render() {
      return (
        <WrapperContainer
          wings={this.state.wings}
          flyAway={this.flyAway}
          {...this.props}
        />
      );
    }
  }
  return WithContainer;
};

export default withRedBull;
