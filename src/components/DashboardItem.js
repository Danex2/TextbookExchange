import React from "react";

function DashboardItem({ post, ...props }) {
  return (
    <div key={post._id} className="card card-item">
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt="book"
      />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">Price: {post.price}</p>
        <p className="card-text">Condition: {post.condition}</p>
        <p className="card-text">Author: {post.author}</p>
        <p className="card-text">Category: {post.category}</p>
        <p className="card-text">Posted At: {post.postedAt}</p>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => props.onDeleteClick(post._id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default DashboardItem;
