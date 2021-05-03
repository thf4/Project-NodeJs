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

router.post("/admin/categorias/nova", async (req, res) => {
  try{
  const { name, slug } = req.body
  const project = await Categoria.create({
    name,
    slug
  });

  await project.save();
  return res.send({ project })
}catch(err){
  console.log(err);
  return res.status(400).send({ error: "Error to create a new project" });
}});

module.exports = (app) => app.use("/", router);
