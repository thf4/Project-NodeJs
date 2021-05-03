const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const kittySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
});

const Kit = mongoose.model("Kit", kittySchema);

module.exports = Kit;
