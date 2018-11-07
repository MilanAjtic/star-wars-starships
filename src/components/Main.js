import React, { Component } from "react";
import { Consumer } from "../Context.js";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Search extends Component {
  onChangeSearch = (url, dispatch, e) => {
    // console.log(e.target.value);
    url += e.target.value;
    let obj = {};
    axios.get(url).then(json => {
      obj = json.data;
      obj.type = "WHERE";
      dispatch(obj);
    });
  };

  onClickPage = (url, dispatch, e) => {
    // console.log("url", url);
    // console.log("dispatch", dispatch);
    // console.log(e.target.name);

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
          // const {
          //   search,
          //   dispatch,
          //   countSearch,
          //   previousSearch,
          //   nextSearch
          // } = value;
          const { results, previous, next, dispatch, count } = value;
          const searchJsx = results.map(starship => (
            <Link
              key={starship.created}
              to={{
                pathname: `/starship/${starship.name}`,
                starship: starship
              }}
              style={{ color: "yellow" }}
            >
              {starship.model}
              <br />
            </Link>
          ));
          // console.log("value", value);
          const url = "https://swapi.co/api/starships/?search=";
          return (
            <div>
              <input
                onChange={this.onChangeSearch.bind(this, url, dispatch)}
                type="text"
              />
              <br />
              Count: {count}
              <br />
              {searchJsx}
              <button
                onClick={this.onClickPage.bind(this, previous, dispatch)}
                name="previous"
              >
                Previous
              </button>
              <button
                onClick={this.onClickPage.bind(this, next, dispatch)}
                name="next"
              >
                Next
              </button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
