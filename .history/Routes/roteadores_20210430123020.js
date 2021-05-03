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

router.post("/categorias/nova", async (req, res) => {
  const project = {
    name: req.body.name,
    slug: req.body.slug,
  };

  new Kit(project)
    .save()
    .then(() => {
      console.log("categoria feita com sucesso");
    })
    .catch((err) => {
      console.erro(err);
    });
});

module.exports = (app) => app.use("/", router);
