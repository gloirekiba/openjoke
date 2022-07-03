const express = require("express");

// const Author = require("../models/joke");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Joke list");
});

router.get("/new", (req, res) => {
  res.render("joke/new");
});

router.post("/", (req, res) => {
  res.send("Joke params");
  console.log(req.params);
});

module.exports = router;
