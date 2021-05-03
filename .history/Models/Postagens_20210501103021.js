const mongoose = require("mongoose")

const Postagen = new mongoose.Schema({
  titulo:{
    type: String,
    require: true
  },
  slug:{
    type: String,
    require: true
  },
  descricao:{
    type: String,
    require:true
  },
  conteudo:{
    type: String,
    require:true
  },
  categoria:{
    type: mongoose.Schema.Types.ObjectId, //armazena um id da categoria 
    ref:"Categoria"
  }
})