import React from "react";
import { connect } from "react-redux";

const CheckAuth = WrappedComponent =>
  class WrappedComponent extends React.Component {};

export default connect(mapStateToProps)(CheckAuth);
