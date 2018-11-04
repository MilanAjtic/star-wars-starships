import React, { Component } from "react";

export default class Starship extends Component {
  state = {
    showStarshipInfo: false
  };
  onClickToggle = () => {
    this.setState({ showStarshipInfo: !this.state.showStarshipInfo });
  };
  render() {
    // console.log("this.props.starship", this.props.starship);
    const { name, starship_class, crew, passengers } = this.props.starship;
    return (
      <div>
        <b>{name}</b> <button onClick={this.onClickToggle}>show/hide</button>
        {this.state.showStarshipInfo ? (
          <React.Fragment>
            <br />
            starship class: {starship_class}
            <br />
            crew: {crew}
            <br />
            passengers: {passengers}
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
