import React from "react";
import { Redirect, Link } from "react-router-dom";

const Authed = () => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/post" className="nav-link">
        New Post
      </Link>
    </li>
    <li className="nav-item">
      <Redirect to="/" className="nav-link">
        Signout
      </Redirect>
    </li>
  </ul>
);

export default Authed;
