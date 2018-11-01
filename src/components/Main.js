import React, { Component } from "react";
import { Consumer } from "../Context.js";
import Starship from "./Starship.js";

class Main extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          // console.log("value", value);
          const { starships } = value;
          const starshipsJsx = starships.map(starship => (
            <Starship key={starship.created} starship={starship} />
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
