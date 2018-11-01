import React, { Component } from "react";

export default class Starship extends Component {
  state = {
    showStarshipInfo: true
  };
  onClickToggle = () => {
    this.setState({ showStarshipInfo: !this.state.showStarshipInfo });
  };
  render() {
    console.log("this.props.starship", this.props.starship);
    console.log("this.state", this.state);
    const { name, starship_class, cargo_capacity } = this.props.starship;
    return (
      <div>
        <h3>{name}</h3> <button onClick={this.onClickToggle}>show/hide</button>
        {this.state.showStarshipInfo ? (
          <React.Fragment>
            <p>starship_class: {starship_class}</p>
            <p>cargo_capacity: {cargo_capacity}</p>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
