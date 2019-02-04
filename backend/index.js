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
    const post = await Post.findOneAndUpdate(
      { email: req.body.email },
      {
        $push: {
          posts: {
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            condition: req.body.condition,
            currency: req.body.currency,
            price: req.body.price,
            url: req.body.url,
            postedAt: new Date()
          }
        }
      },
      { upsert: true, new: true }
    );
    res.status(201).json(post);
  } catch (e) {
    res.send(e);
  }
});

app.post("/dashboard", async (req, res) => {
  try {
    const dash = await Post.findOne({ email: req.body.email }).exec();
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

mongoose
  .connect("mongodb://localhost:27017/posts", { useNewUrlParser: true })
  .then(() => {
    app.listen(4000, () => console.log("Server running on port: 4000."));
  });
