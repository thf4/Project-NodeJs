const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  eAdmin:{
    type:Number,
    default: 0
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", User)

module.exports = Users;