import React, { Component } from "react";
import "../css/Post.css";

class Post extends Component {
  state = {
    title: "",
    category: "",
    condition: "",
    currency: "",
    price: "",
    image: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // post method
  };
  render() {
    console.log(this.state);
    return (
      <div className="form-container justify-content-center">
        <form method="post">
          <div className="row container justify-content-center">
            <div className="form-group col-md-12">
              <label htmlFor="Book Title">Book Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Title of textbook"
                required
                name="title"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="Author">Author</label>
              <input
                type="text"
                className="form-control"
                placeholder="Author"
                required
                name="author"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                className="form-control"
                onChange={this.handleChange}
              >
                <option />
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="Health">Health</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="condition">Condition</label>
              <select
                name="condition"
                id="condition"
                className="form-control"
                onChange={this.handleChange}
              >
                <option />
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="currency">Currency</label>
              <select
                name="currency"
                id="currency"
                className="form-control"
                onChange={this.handleChange}
              >
                <option />
                <option value="$">USD</option>
                <option value="$">CAD</option>
                <option value="£">£</option>
                <option value="€">€</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex. 10.00"
                required
                name="price"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="imgur link"
                required
                name="image"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Post;
