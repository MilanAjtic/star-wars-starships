import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <p>
      <Link to={{ pathname: "/" }} style={{ color: "white" }}>
        Main
      </Link>{" "}
      <Link to={{ pathname: "/search" }} style={{ color: "white" }}>
        Search by model
      </Link>
    </p>
  );
}
