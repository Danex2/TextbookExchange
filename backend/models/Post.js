const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  posts: [
    {
      title: String,
      author: String,
      category: String,
      condition: String,
      currency: String,
      price: Number,
      url: String,
      postedAt: Date
    }
  ]
});

module.exports = mongoose.model("post", postSchema);
