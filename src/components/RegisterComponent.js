import React, { Component } from "react";
import "../css/Login.css";
import Verify from "../HOC/Verify";
import { signUp } from "../actions/auth";
import { compose } from "redux";
import { connect } from "react-redux";

class RegisterComponent extends Component {
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
    const { password, password2, email } = this.state;
    e.preventDefault();
    //check if passwords match
    if (password !== password2) {
      this.setState({ error: "Passwords do not match." });
    } else if (this.props.error) {
      this.setState({ error: this.props.error });
    } else {
      let newUser = {
        email,
        password
      };
      this.props.signUp(newUser);
    }
  };
  render() {
    const { error } = this.state;
    console.log(error);
    return (
      <div className="grid-container">
        <form
          action="post"
          className="container grid-item"
          onSubmit={this.onSubmit}
        >
          {error ? (
            <div className="alert alert-danger" role="alert">
              {error}
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
              name="password2"
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

const mapStateToProps = state => {
  return {
    error: state.auth.success
  };
};

export default compose(
  connect(
    mapStateToProps,
    { signUp }
  ),
  Verify
)(RegisterComponent);
