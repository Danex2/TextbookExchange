import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Verify = WrappedComponent => {
  class HOC extends React.Component {
    render() {
      const { auth } = this.props;
      return (
        <React.Fragment>
          {auth.isEmpty === false ? (
            <Redirect to="/" />
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </React.Fragment>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.firebase.auth
    };
  };

  return connect(mapStateToProps)(HOC);
};

export default Verify;
