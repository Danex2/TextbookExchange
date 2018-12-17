import React, { Component } from "react";
import "../css/Login.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    error: null
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    const { password, password2 } = this.state;
    e.preventDefault();
    //check if passwords match
    if (password !== password2) {
      this.setState({ error: "Passwords do not match." });
    }
    // send data to api
  };
  render() {
    return (
      <div className="grid-container">
        <form
          action="post"
          className="container grid-item"
          onSubmit={this.onSubmit}
        >
          {this.state.error ? (
            <div class="alert alert-danger" role="alert">
              {this.state.error}
            </div>
          ) : null}
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

export default Register;
