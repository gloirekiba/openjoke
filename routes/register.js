const express = require("express");

const Contributor = require("../models/Contributor");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.render("register");
  })
  .post(async (req, res) => {
    const { username, password } = req.body;

    try {
      await new Contributor({
        username,
        password,
      }).save();
      res.render("register", {
        alert: {
          type: "success",
          message: "Account created sucessfully",
        },
      });
    } catch (error) {
      console.log(error);
      res.render("register", {
        alert: {
          type: "danger",
          message: "Something went wrong",
        },
      });
    }
  });

module.exports = router;
