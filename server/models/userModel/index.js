const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: String,
  email: String,
  picture: String,
  credits: { type: Number, default: 0 },
  careatedAt: { type: Date, default: new Date().getTime() },
  updatedAt: { type: Date, default: new Date().getTime() }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
