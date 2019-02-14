import React, { Component } from "react";
import "../css/Login.css";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { compose } from "redux";
import Verify from "../HOC/Verify";

class LoginComponent extends Component {
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
    const { error } = this.props;
    return (
      <div className="grid-container">
        <form className="container grid-item" onSubmit={this.onSubmit}>
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
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    error: state.auth.success
  };
};

export default compose(
  connect(
    mapStateToProps,
    { login }
  ),
  Verify
)(LoginComponent);
