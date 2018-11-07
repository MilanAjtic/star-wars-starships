import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <p>
      <Link to={{ pathname: "/" }} style={{ color: "white" }}>
        Starships
      </Link>
    </p>
  );
}
