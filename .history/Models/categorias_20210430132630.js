const mongoose = require("mongoose");

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/categorias", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(()=>{
  console.log('conectado com sucesso')
}).catch((err) => {
  console.log('erro' +err)
});


const CategoriaSchema = new mongoose.Schema({
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

const Categoria = mongoose.model("Categoria", CategoriaSchema);

module.exports = Categoria;
