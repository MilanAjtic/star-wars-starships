import React, { Component } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import "./App.css";
import { Provider } from "./Context.js";

class App extends Component {
  render() {
    // console.log("count: ", this.state);
    return (
      <div className="App">
        <Provider>
          <Header />
          <Main />
          <Footer />
        </Provider>
      </div>
    );
  }
}

export default App;
