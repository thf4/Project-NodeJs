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
  const project = await  Kit.create({
    name:req.body.name,
    slug:req.body.slug
  })
  return res.send({ project })
})


module.exports = (app) => app.use("/", router);
