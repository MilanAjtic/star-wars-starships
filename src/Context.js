import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "WHERE":
      return {
        ...state,
        results: action.results,
        previous: action.previous,
        next: action.next,
        count: action.count
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    results: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
      localStorage.setItem("state", JSON.stringify(action));
    },
    dispatchOld: action => this.setState(state => reducer(state, action))
  };
  componentDidMount() {
    if (!localStorage.getItem("state")) {
      axios.get("https://swapi.co/api/starships/").then(json => {
        this.setState({
          results: json.data.results,
          previous: json.data.previous,
          next: json.data.next,
          count: json.data.count
        });
        localStorage.setItem("state", JSON.stringify(json.data));
        // localStorage.setItem("stateExists", "true");
      });
    } else {
      const data = JSON.parse(localStorage.getItem("state"));
      this.setState(data);
    }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

// TODO

// da ono sto se kuca u search polje ostane tu i dalje kad se menja route (smestiti ga u state?)
// mozda uraditi listanje za pilote i filmove za svaki starship?

// DONE

// ubaci rutu za stranu pojedinacnog starshipa
// uradi search
// da se podaci za Starship dobijaju iz state-a, a ne preko linka (STARO - sada cim stigne response, smestaju se u local storage, a unutar Starship se citaju iskljucivo preko local storage, a ne iz state preko Consumer, i ne dobijaju se preko Link, kao u starim verzijama)
// da se aplikacija ne raspadne kad se na strani Starship uradi refresh (uradjeno preko local storage)
