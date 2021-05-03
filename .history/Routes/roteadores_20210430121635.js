const express = require("express");
const router = express.Router();
const Categoria = require("../Models/categorias");

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
  Categoria.create({
    name:req.body.name,
    slug:req.body.slug
  })
  
})


module.exports = (app) => app.use("/", router);
