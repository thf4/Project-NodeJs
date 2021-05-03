const express = require("express");
const router = express.Router();
const Categoria = require("../Models/categorias");

router.get("/", (req, res) => {
  res.render("admin/index");
});

router.get("/admin/categorias/add", (req, res) => {
  res.render("admin/addcategorias");
});

router.get("/categorias", (req, res) => {
  Categoria.find().lean()
    .then((categorias) => {
      res.render("admin/categorias", { categorias: categorias });
    })
    .catch((err) => {
      req.flash("error_msg", "Erro ao listar as categorias");
      res.redirect("/admin");
    });
});

router.post("/admin/categorias/criar", async (req, res) => {
  const { body = {} } = req;
  const { name, slug } = body;
  const erros = [];
  if (!name) erros.push({ text: "Name invalid" });
  if (!slug) erros.push({ text: "Slug required" });
  if (name && name.length < 2) erros.push({ text: "Name too short" });
  if (slug && slug.length < 2) erros.push({ text: "Slug too short" });
  if (erros.length > 0) {
    res.render("admin/addcategorias", { erros: erros });
  } else {
    try {
      const { name, slug } = req.body;
      const project = await Categoria.create({
        name,
        slug,
      });

      await project.save();
      await req.flash("success_msg", "Categoria criada com sucesso");
      return res.redirect("/categorias");
    } catch (err) {
      await req.flash("error_msg");
      return res.redirect("/admin");
    }
  }
});

router.get("/admin/categorias/nova", async (req, res) => {
  res.redirect("admin/addcategorias");
});

module.exports = (app) => app.use("/", router);
