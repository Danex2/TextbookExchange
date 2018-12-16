import React, { Component } from "react";
import "../css/Login.css";
import CheckAuth from "../HOC/CheckAuth";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    // send data to api
  };
  render() {
    return (
      <div className="grid-container">
        <form className="container grid-item">
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
              autoComplete="off"
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
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Verify Password</label>
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
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default CheckAuth(Register);
