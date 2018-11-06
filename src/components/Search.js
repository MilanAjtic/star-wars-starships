import React, { Component } from "react";
import { Consumer } from "../Context.js";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Search extends Component {
  onChangeSearch = (url, dispatch, e) => {
    // console.log(e.target.value);
    console.log(e.target.value);
    url += e.target.value;
    let obj = {};
    axios.get(url).then(json => {
      obj = json.data;
      obj.type = "SEARCH";
      dispatch(obj);
    });
  };

  onClickPage = (url, dispatch, e) => {
    // console.log("url", url);
    // console.log("dispatch", dispatch);
    console.log(e.target.name);

    let obj = {};
    if (url !== null) {
      axios.get(url).then(json => {
        obj = json.data;
        obj.type = "SEARCH";
        dispatch(obj);
      });
    }
  };

  render() {
    return (
      <Consumer>
        {value => {
          const {
            search,
            dispatch,
            countSearch,
            previousSearch,
            nextSearch
          } = value;
          const searchJsx = search.map(starship => (
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
          console.log(search);
          const url = "https://swapi.co/api/starships/?search=";
          return (
            <div>
              <input
                onChange={this.onChangeSearch.bind(this, url, dispatch)}
                type="text"
              />
              <br />
              Count: {countSearch}
              <br />
              {searchJsx}
              <button
                onClick={this.onClickPage.bind(this, previousSearch, dispatch)}
                name="previous"
              >
                Previous
              </button>
              <button
                onClick={this.onClickPage.bind(this, nextSearch, dispatch)}
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
