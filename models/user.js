// models/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    unique: true,
    required: true,
    type: String
  },
  username: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  description: String,
  imgUrl: {
    type: String,
    default:
      "https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250&h=250"
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
