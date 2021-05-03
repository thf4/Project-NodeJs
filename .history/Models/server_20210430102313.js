const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const kittySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  subtitle: { type: String },
});

const Kit = mongoose.model("Kit", kittySchema);

module.exports = Kit;
