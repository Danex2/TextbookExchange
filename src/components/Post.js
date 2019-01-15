import React, { Component } from "react";
import "../css/Post.css";

class Post extends Component {
  render() {
    return (
      <div className="form-container justify-content-center">
        <form method="post">
          <div className="row container justify-content-center">
            <div className="form-group col-md-12">
              <label htmlFor="Book Title">Book title</label>
              <input
                type="text"
                className="form-control"
                placeholder="some title"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="Author">Author(s)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Author"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="category">Category</label>
              <select name="category" id="category" className="form-control">
                <option />
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="Health">Health</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
            <div className="form-group col-md-1">
              <label htmlFor="condition">Condition</label>
              <select name="condition" id="condition" className="form-control">
                <option />
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="currency">Currency</label>
              <select name="currency" id="currency" className="form-control">
                <option />
                <option value="USD">$ (USD)</option>
                <option value="CAD">$ (CAD)</option>
                <option value="POUND">£</option>
                <option value="EURO">€</option>
              </select>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex. 10.00"
                required
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="imgur link"
                required
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Post;
