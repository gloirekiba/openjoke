const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  contributor: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Joke", jokeSchema);
