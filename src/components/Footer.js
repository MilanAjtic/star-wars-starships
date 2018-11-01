import React, { Component } from "react";
import { Consumer } from "../Context.js";

class Footer extends Component {
  onClickPrevious = (url, dispatch) => {
    // console.log("url", url);
    // console.log("dispatch", dispatch);
    const obj = {};
    obj.type = url === null ? null : "PREVIOUS";
    obj.url = url;
    console.log("obj", obj);
    dispatch(obj);
  };
  onClickNext = (url, dispatch) => {
    // console.log("url", url);
    // console.log("dispatch", dispatch);
    const obj = {};
    obj.type = url === null ? null : "NEXT";
    obj.url = url;
    console.log("obj", obj);
    dispatch(obj);
  };
  render() {
    return (
      <Consumer>
        {value => {
          // console.log("footer-value", value);
          const { previous, next, dispatch } = value;
          return (
            <div className="Footer" style={{ backgroundColor: "yellow" }}>
              <footer>
                <button
                  onClick={this.onClickPrevious.bind(this, previous, dispatch)}
                >
                  Previous
                </button>
                <button onClick={this.onClickNext.bind(this, next, dispatch)}>
                  Next
                </button>
              </footer>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Footer;
