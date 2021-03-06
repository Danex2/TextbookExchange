import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const Authed = props => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/post" className="nav-link">
        New Post
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/" className="nav-link" onClick={props.logout}>
        Logout
      </Link>
    </li>
  </ul>
);

export default connect(
  null,
  { logout }
)(Authed);
