if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const path = require("path");
const express = require("express");
const expressEjsLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");

mongoose.connect(process.env.DATABASE_URL);
const app = express();

app
  .set("views", path.resolve(__dirname, "views"))
  .set("view engine", "ejs")
  .set("layout", "layout/layout")
  .use(expressEjsLayout)
  .use(express.static(path.resolve(__dirname, "public")));

const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to mongodb"));

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port 3000`);
});
