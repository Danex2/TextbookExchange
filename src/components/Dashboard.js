import React from "react";
import { connect } from "react-redux";
import { getDashboardPosts } from "../actions/post";
import "../css/Listings.css";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getDashboardPosts(this.props.auth.email);
  }
  render() {
    return (
      <div>
        {this.props.posts === undefined ? (
          <p>You have no active ads.</p>
        ) : (
          <div className="card-grid">
            {this.props.posts.map(post => {
              return (
                <div key={post._id} className="card card-item">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">Price: {post.price}</p>
                    <p className="card-text">Condition: {post.condition}</p>
                    <button className="btn btn-danger">delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.post.dashboardData.posts,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { getDashboardPosts }
)(Dashboard);
