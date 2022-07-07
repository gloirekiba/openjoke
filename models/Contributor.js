const mongoose = require("mongoose");

const contributorSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contributor", contributorSchema);
