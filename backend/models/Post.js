const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  condition: String,
  currency: String,
  price: Number,
  url: String,
  postedBy: String,
  contact: String,
  postedAt: Date
});

module.exports = mongoose.model("post", postSchema);
