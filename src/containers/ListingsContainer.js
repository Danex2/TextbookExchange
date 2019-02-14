import React, { Component } from "react";
import "../css/Listings.css";
import { connect } from "react-redux";
import { getListings } from "../actions/post";

const posts = [
  {
    id: 1,
    title: "Science book",
    author: "Some science guy",
    category: "Science",
    condition: "New",
    price: "$300.00",
    imgURL: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Science book",
    author: "Some science guy",
    category: "Science",
    condition: "New",
    price: "$300.00",
    imgURL: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Science book",
    author: "Some science guy",
    category: "Science",
    condition: "New",
    price: "$300.00",
    imgURL: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    title: "Science book",
    author: "Some science guy",
    category: "Science",
    condition: "New",
    price: "$300.00",
    imgURL: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    title: "Science book",
    author: "Some science guy",
    category: "Science",
    condition: "New",
    price: "$300.00",
    imgURL: "https://via.placeholder.com/150"
  }
];

class Listings extends Component {
  componentDidMount() {
    this.props.getListings();
  }
  render() {
    return (
      <div className="card-grid">
        {posts.map(post => {
          return (
            <div key={post.id} className="card card-item">
              <img src={post.imgURL} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">Price: {post.price}</p>
                <p className="card-text">Condition: {post.condition}</p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    listings: state.post.listingData
  };
};

export default connect(
  mapStateToProps,
  { getListings }
)(Listings);
