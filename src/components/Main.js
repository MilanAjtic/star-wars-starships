import React, { Component } from "react";
import { Consumer } from "../Context.js";
// import Starship from "./Starship.js";
import { Link } from "react-router-dom";
import axios from "axios";

class Main extends Component {
  onClickPage = (url, dispatch, e) => {
    // console.log("url", url);
    // console.log("dispatch", dispatch);
    console.log(e.target.value);

    let obj = {};
    if (url !== null) {
      axios.get(url).then(json => {
        obj = json.data;
        obj.type = "WHERE";
        dispatch(obj);
      });
    }
    // console.log("obj", obj);
    // axios-get i dispatch su async, tako da ce se oni izvrsiti tek posle console.log(), a mi pri svakom pozivu onClickPage praznimo obj, i zato log stalno daje prazan obj
  };

  render() {
    return (
      <Consumer>
        {value => {
          // console.log("value", value);
          const { starships, previous, next, dispatch } = value;
          const starshipsJsx = starships.map(starship => (
            <Link
              key={starship.created}
              to={{
                pathname: `/starship/${starship.name}`,
                starship: starship
              }}
              style={{ color: "yellow" }}
            >
              {starship.name}
              <br />
              {/* <Starship key={starship.created} starship={starship} /> */}
            </Link>
          ));
          return (
            <div
            // style={{ backgroundColor: "black", color: "black" }}
            >
              <br />
              {starshipsJsx}
              <button onClick={this.onClickPage.bind(this, previous, dispatch)}>
                Previous
              </button>
              <button onClick={this.onClickPage.bind(this, next, dispatch)}>
                Next
              </button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Main;
