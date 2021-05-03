const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/postagens", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const Postagen = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  conteudo: {
    type: String,
    required: true,
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId, //armazena um id da categoria
    ref: "Categoria",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Postagens = mongoose.model("Postagens", Postagen);

module.exports = Postagens;
