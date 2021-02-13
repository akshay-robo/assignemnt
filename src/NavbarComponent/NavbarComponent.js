import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 navbarpills">
          <Link to="/photos">Photos </Link>
          <Link to="/videos">Videos </Link>
        </div>
        <div className="col-md-4 text-right navbarpills">
          <Link to="/favorities">Favorities</Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
