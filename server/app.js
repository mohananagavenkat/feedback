const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

const app = express();
dotenv.config({
  path: path.join(__dirname, ".env")
});

const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.use(routes);

app.listen(PORT, () => {
  console.log(`API is working on Port Number ${PORT}`);
});
