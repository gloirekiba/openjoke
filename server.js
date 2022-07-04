if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressEjsLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const jokeRouter = require("./routes/joke");

// Setup

const app = express();

app
  .set("views", path.resolve(__dirname, "views"))
  .set("view engine", "ejs")
  .set("layout", "layout/layout")
  .use(expressEjsLayout)
  .use(bodyParser.urlencoded({ limit: "10mb", extended: false }))
  .use(express.static(path.resolve(__dirname, "public")));

// Routing
app.use("/", indexRouter);
app.use("/joke", jokeRouter);

// Database
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to mongodb"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port 3000`);
});
