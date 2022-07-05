const isLocalEnv = process.env.NODE_ENV !== "production";

if (isLocalEnv) {
  require("dotenv").config();
}

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const jokeRouter = require("./routes/joke");
const loginRouter = require("./routes/login");

// Initialize app
const app = express();

app
  .set("views", path.resolve(__dirname, "views"))
  .set("view engine", "pug")
  .use(express.urlencoded({ extended: false }))
  .use(express.static(path.resolve(__dirname, "public")));
if (isLocalEnv) {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// Routes
app.use("/", indexRouter);
app.use("/joke", jokeRouter);
app.use("/login", loginRouter);

// Connect to database
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to mongodb"));

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port 3000`);
});
