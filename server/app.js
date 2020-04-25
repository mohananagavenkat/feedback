const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const passport = require("passport");
const cookieSession = require("cookie-session");

const app = express();
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: path.join(__dirname, ".env")
  });
}
mongoose
  .connect(process.env.MANGO_URL, {
    reconnectTries: 10,
    reconnectInterval: 500,
    autoReconnect: true,
    useNewUrlParser: true,
    dbName: "feedback"
  })
  .then(res => {
    console.log("MongoDB Connected");
  })
  .catch(error => {
    console.log("MongoDB Error", error.message);
  });

const PORT = process.env.PORT || 3000;
const routes = require("./routes");
require("./models");
require("./auth/googleAuth");

app.set("trust proxy", 1);
app.use(
  cookieSession({
    maxAge: 10 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

app.listen(PORT, () => {
  console.log(`API is working on Port Number ${PORT}`);
});
