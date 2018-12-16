import React, { Component } from "react";
import "../css/Login.css";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import CheckAuth from "../HOC/CheckAuth";
import { compose } from "redux";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };
  render() {
    return (
      <div className="grid-container">
        <form className="container grid-item" onSubmit={this.onSubmit}>
          <h1 className="text-center">
            Textbook Exchange{" "}
            <span role="img" aria-label="Book emoji">
              📘
            </span>
          </h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleInput}
            />
            <small id="emailHelp" className="form-text text-muted">
              Your email will never be shared with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    { login }
  ),
  CheckAuth(Login)
);