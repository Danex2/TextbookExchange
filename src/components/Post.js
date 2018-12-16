import React, { Component } from "react";
import "../css/Post.css";

class Post extends Component {
  render() {
    return (
      <div className="form-container justify-content-center">
        <form>
          <div className="row container justify-content-center">
            <div className="form-group col-md-12">
              <label htmlFor="Book Title">Book title</label>
              <input
                type="text"
                className="form-control"
                placeholder="some title"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="Author">Author(s)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Author"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="category">category</label>
              <select name="category" id="category" className="form-control">
                <option />
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="Health">Health</option>
                <option value="Computers & Technology">
                  Computers & Technology
                </option>
                <option value="Law">Law</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="condition">Condition</label>
              <select name="condition" id="condition" className="form-control">
                <option />
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="price">Price (USD)</label>
              <input type="text" className="form-control" placeholder="$" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Post;
