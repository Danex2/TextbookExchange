const request = require("supertest");
const expect = require("chai").expect;
const app = require("../index");
const after = require("mocha").after;

describe("Testing statuses of routes", function() {
  after(function() {
    process.exit();
  });

  it("GET: Return all posts by users should return a 200 status code", done => {
    request(app)
      .get("/posts")
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        done();
      });
  });
  it("POST: Creating a new post should return a 201 status code", done => {
    let userPost = {
      title: "This is a title",
      author: "Smart science guy",
      category: "Science",
      condition: "Used",
      currency: "CAD",
      price: 300.0,
      url: "http://wehavebooks.com",
      postedBy: "Some guy named dane",
      contact: "dane@gmail.com",
      postedAt: new Date()
    };
    request(app)
      .post("/post")
      .send(userPost)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        done();
      });
  });
});
