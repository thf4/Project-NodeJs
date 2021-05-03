const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Categoria = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
});

const Categoria = mongoose.model("categorias", Categoria);

module.exports = Categoria;
