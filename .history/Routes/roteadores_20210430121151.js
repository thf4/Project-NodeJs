const express = require("express");
const router = express.Router();
const Kit = require("../Models/categorias");

router.get("/", (req, res) => {
  res.render("admin/index");
});

router.get("/categorias", (req, res) => {
  res.render("admin/categorias");
});

router.get("/categorias/add", (req, res) => {
  res.render("admin/addcategorias");
});

router.post("/categorias/nova", (req, res) =>{
  const novaCategoria = {
    name:req.body.name,
    slug:req.body.slug,

  }

  new Categoria(novaCategoria).save().then(() => {
    try {

    }catch(err){
      res.status(400).send("Erro ao cadastrar nova categoria")

    }
  });
})


module.exports = (app) => app.use("/", router);
