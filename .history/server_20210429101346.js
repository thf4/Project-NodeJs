const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/teste", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const kittySchema = new Schema({
  name: String,
  title: String,
  subtitle: String,
});

const Kit = mongoose.model('Kit', kittySchema);

module.exports = Kit;
