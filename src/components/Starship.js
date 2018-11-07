import React, { Component } from "react";
import { Consumer } from "../Context.js";

export default class Starship extends Component {
  render() {
    // console.log(this.props.match.params.name);
    return (
      <Consumer>
        {value => {
          const {
            name,
            model,
            manufacturer,
            cost_in_credits,
            length,
            max_atmosphering_speed,
            crew,
            passengers,
            cargo_capacity,
            consumables,
            hyperdrive_rating,
            MGLT,
            starship_class,
            pilots,
            films
          } = this.props.location.starship;
          console.log(value);
          return (
            <div>
              <b>{name}</b>
              <br />
              name: {name} <br />
              model: {model} <br />
              manufacturer: {manufacturer} <br />
              cost_in_credits: {cost_in_credits} <br />
              length: {length} <br />
              max_atmosphering_speed: {max_atmosphering_speed} <br />
              crew: {crew} <br />
              passengers: {passengers} <br />
              cargo_capacity: {cargo_capacity} <br />
              consumables: {consumables} <br />
              hyperdrive_rating: {hyperdrive_rating} <br />
              MGLT: {MGLT} <br />
              starship_class: {starship_class} <br />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
