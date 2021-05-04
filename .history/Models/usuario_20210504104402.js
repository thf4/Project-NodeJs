const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/categorias", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});


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