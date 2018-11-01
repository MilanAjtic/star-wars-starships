import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    // case "NEXT": {
    //   axios.get(action.url).then(json => {
    //     return {
    //       ...state,
    //       starships: json.data.results,
    //       previous: json.data.previous,
    //       next: json.data.next
    //     };
    //   });
    // }
    // case "PREVIOUS": {
    //   axios.get(action.url).then(json =>
    //     this.setState({
    //       starships: json.data.results,
    //       previous: json.data.previous,
    //       next: json.data.next
    //     })
    //   );
    // }
    case "PREVIOUS":
      return {
        ...state,
        next: "prethodni"
      };
    case "NEXT":
      return {
        ...state,
        next: "sledeci"
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    starships: [],
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
