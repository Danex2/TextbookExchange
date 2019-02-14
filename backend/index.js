const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./models/Post");
const { json, urlencoded } = require("body-parser");
mongoose.Promise = global.Promise;

app.use(urlencoded({ extended: true }));
app.use(json());

app.post("/post", async (req, res) => {
  try {
    let userPost = {
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      condition: req.body.condition,
      currency: req.body.currency,
      price: req.body.price,
      image: req.body.image,
      postedBy: req.body.username,
      contact: req.body.email,
      postedAt: new Date()
    };
    const post = await Post.create(userPost);
    res.status(201).json(post);
  } catch (e) {
    res.send(e);
  }
});

app.post("/dashboard", async (req, res) => {
  try {
    const dash = await Post.find({ contact: req.body.email }).exec();
    res.status(200).json(dash);
  } catch (e) {
    res.send(e);
  }
});

app.get("/posts", async (req, res) => {
  try {
    const allPosts = await Post.find({}).exec();
    res.status(200).json(allPosts);
  } catch (e) {
    res.send(e);
  }
});

app.delete("/dashboard", async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete({
      _id: req.body.id
    }).exec();
    res.status(200).json(deletePost);
  } catch (e) {
    res.send(e);
  }
});

mongoose
  .connect("mongodb://localhost:27017/posts", { useNewUrlParser: true })
  .then(() => app.listen(4000, () => console.log("Listening on port: 4000")));

module.exports = app;
