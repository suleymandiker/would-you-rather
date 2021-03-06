import React from "react";
import { NavLink } from "react-router-dom";

function PageError() {
  return (
    <div className="center">
      <h1>We don't have this page</h1>
      <p className="padding-top">
        You can click this link to go back to home page
        <NavLink to="/"> Click Here</NavLink>{" "}
      </p>
    </div>
  );
}

export default PageError;
