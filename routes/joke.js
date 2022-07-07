const express = require("express");

const Joke = require("../models/Joke");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const jokes = await Joke.find({});
    res.render("joke", { jokes });
  })
  .post(async (req, res) => {
    try {
      await new Joke({
        joke: req.body.joke,
        author: req.body.author,
      }).save();
      res.render("joke/new", {
        alert: {
          type: "success",
          message: "Joke added successfully",
        },
      });
    } catch (error) {
      console.log(error);
      res.render("joke/new", {
        alert: {
          type: "danger",
          message: "Something went wrong",
        },
      });
    }
  });

router.get("/new", (req, res) => {
  res.render("joke/new");
});

module.exports = router;
