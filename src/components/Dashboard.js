import React from "react";
import { connect } from "react-redux";
import { getDashboardPosts } from "../actions/post";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getDashboardPosts(this.props.auth.email);
  }
  render() {
    return <div>Hello ld</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.data,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { getDashboardPosts }
)(Dashboard);
