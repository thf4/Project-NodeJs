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
  const erros = [];
  if (
    !req.body.name ||
    typeof req.body.name == undefined ||
    req.body.name == null
  ) {
    erros.push({ text: "Name invalid!" });
  }
  if (
    !req.body.slug ||
    typeof req.body.slug == undefined ||
    req.body.slug == null
  ) {
    erros.push({ text: "Slug invalid!" });
  }
  if (req.body.name.length < 2) {
    erros.push({ text: "Name small" });
  }
  if (erros.length > 0) {
    res.render("/admin/addcategorias", { erros: erros });
  } else {
    try {
      const { name, slug } = req.body;
      const project = await Categoria.create({
        name,
        slug,
      });
  
      await project.save();
      return res.send("Salvo com sucesso");
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: "Error to create a new project" });
    }

  }


});

module.exports = (app) => app.use("/", router);
