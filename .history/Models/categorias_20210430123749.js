const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/categorias", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Pormise = global.Promise

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

const Kit = mongoose.model("categoria", Categoria);

module.exports = Kit;
