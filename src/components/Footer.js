import React, { Component } from "react";
import { Consumer } from "../Context.js";
import axios from "axios";

class Footer extends Component {
  onClickPage = (url, dispatch) => {
    // console.log("url", url);
    // console.log("dispatch", dispatch);

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
          // console.log("footer-value", value);
          const { previous, next, dispatch } = value;
          return (
            <div className="Footer" style={{ backgroundColor: "yellow" }}>
              <footer>
                <button
                  onClick={this.onClickPage.bind(this, previous, dispatch)}
                >
                  Previous
                </button>
                <button onClick={this.onClickPage.bind(this, next, dispatch)}>
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
