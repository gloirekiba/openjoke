const express = require("express");

const Joke = require("../models/joke");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const jokes = await Joke.find({});
    res.render("joke", { jokes });
  })
  .post(async (req, res) => {
    const joke = await new Joke({
      joke: req.body.joke,
      author: req.body.author,
    });

    joke.save((err, newJoke) => {
      if (err) {
        res.render("joke/new", {
          payload: joke,
          alert: {
            type: "danger",
            message: "Something went wrong",
          },
        });
      }
      res.render("joke/new", {
        alert: {
          payload: joke,
          type: "success",
          message: "Joke added successfully",
        },
      });
    });
  });

router.get("/new", (req, res) => {
  res.render("joke/new");
});

module.exports = router;
