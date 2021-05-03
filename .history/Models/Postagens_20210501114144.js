const mongoose = require("mongoose");

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
    ref: "categoria",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Postagens = mongoose.model("Postagens", Postagen);

module.exports = Postagens;