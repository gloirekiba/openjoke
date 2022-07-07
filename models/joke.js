const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    required: false,
  },
  contributors: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date().toISOString(),
    immutable: true,
  },
  lastUpdated: {
    type: Date,
    default: () => new Date().toISOString(),
  },
  aproved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Joke", jokeSchema);
