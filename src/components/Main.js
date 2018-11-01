import React, { Component } from "react";
import { Consumer } from "../Context.js";

class Main extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          // console.log("value", value);
          const { starships } = value;
          const starshipsJsx = starships.map(starship => (
            <div key={starship.created}>{starship.name}</div>
          ));
          return (
            <div
              className="Main"
              style={{ backgroundColor: "black", color: "white" }}
            >
              {starshipsJsx}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Main;
