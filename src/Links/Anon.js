import React from "react";
import { Link } from "react-router-dom";

function Anon() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  );
}

export default Anon;
