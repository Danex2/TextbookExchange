import React from "react";
import { Link } from "react-router-dom";
import Authed from "../Links/Authed";
import Anon from "../Links/Anon";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Textbook Exchange
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarText"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Listings
            </Link>
          </li>
          <Authed />
          <Anon />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
