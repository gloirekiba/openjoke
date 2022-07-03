const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Joke", jokeSchema);
