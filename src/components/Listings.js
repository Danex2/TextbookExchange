import React, { Component } from "react";

const posts = [
  {
    id: 1,
    title: "Science book",
    author: "Some science guy",
    category: "Science",
    condition: "New",
    price: "$300.00"
  },
  {
    id: 2,
    title: "Science book",
    author: "Some science guy",
    category: "Science",
    condition: "New",
    price: "$300.00",
    imgURL: "https://somewebsite.com"
  },
  {
    id: 3,
    title: "Science book",
    author: "Some science guy",
    category: "Science",
    condition: "New",
    price: "$300.00",
    imgURL: "https://somewebsite.com"
  },
  {
    id: 4,
    title: "Science book",
    author: "Some science guy",
    category: "Science",
    condition: "New",
    price: "$300.00",
    imgURL: "https://somewebsite.com"
  },
  {
    id: 5,
    title: "Science book",
    author: "Some science guy",
    category: "Science",
    condition: "New",
    price: "$300.00",
    imgURL: "https://somewebsite.com"
  }
];

class Listings extends Component {
  render() {
    return (
      <React.Fragment>
        {posts.map(post => {
          return <div>{post.title}</div>;
        })}
      </React.Fragment>
    );
  }
}

export default Listings;
