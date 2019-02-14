import React from "react";
import { connect } from "react-redux";
import { getDashboardPosts, deletePost } from "../actions/post";
import "../css/Listings.css";
import DashboardComponent from "../components/DashboardComponent";

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.getDashboardPosts(this.props.auth.email);
  }
  onDeleteClick = id => {
    this.props.deletePost(id);
  };
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts === undefined ? (
          <p>You have no active ads.</p>
        ) : (
          <DashboardComponent
            posts={posts}
            onDeleteClick={this.onDeleteClick}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.post.dashboardData,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { getDashboardPosts, deletePost }
)(DashboardContainer);
