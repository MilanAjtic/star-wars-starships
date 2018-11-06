import React, { Component } from "react";
import Header from "./components/Header.js";
import Nav from "./components/Nav";
import Main from "./components/Main.js";
import Starship from "./components/Starship.js";
import Search from "./components/Search.js";
import "./App.css";
import { Provider } from "./Context.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "yellow"
        }}
      >
        <Provider>
          <Router>
            <React.Fragment>
              <Header />
              <Nav />
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/starship/:name" component={Starship} />
              </Switch>
            </React.Fragment>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
