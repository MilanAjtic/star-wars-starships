import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "WHERE":
      return {
        ...state,
        starships: action.results,
        previous: action.previous,
        next: action.next
      };
    case "SEARCH":
      return {
        ...state,
        search: action.results,
        previousSearch: action.previous,
        nextSearch: action.next,
        countSearch: action.count
      };
    // case "PREVIOUS":
    //   return {
    //     ...state,
    //     previous: "prethodni"
    //   };
    // case "NEXT":
    //   return {
    //     ...state,
    //     next: "sledeci"
    //   };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    starships: [],
    search: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  componentDidMount() {
    axios.get("https://swapi.co/api/starships/").then(json =>
      this.setState({
        starships: json.data.results,
        previous: json.data.previous,
        next: json.data.next
      })
    );
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

// mozda uraditi listanje za pilote i filmove za svaki starship?
// oznaciti redni broj strane na vrhu main-a

// DONE

// ubaci rutu za stranu pojedinacnog starshipa
// uradi search (mozda na posebnoj ruti, ako ce search ici na api, a ne traziti kroz state)
