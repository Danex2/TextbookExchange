import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const CheckAuth = WrappedComponent => props => {
  class WrappedComponent extends React.Component {
    render() {
      return props.auth.isEmpty === true ? (
        <Redirect to="/" />
      ) : (
        <WrappedComponent {...props} />
      );
    }
  }
  return WrappedComponent;
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(CheckAuth);
