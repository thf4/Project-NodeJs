const express = require("express");
const router = express.Router();
const Categoria = require("../Models/categorias");
const Erros = require("../Middleware/midle")
router.get("/", (req, res) => {
  res.render("admin/index");
});

router.get("/categorias/add", (req, res) => {
  res.render("admin/addcategorias");
});

router.get("/categorias", (req, res) => {
  Categoria.find().then((categorias) =>{
    res.render("/admin/categorias", { categorias : categorias });
  }).catch((err)=>{
    req.flash("error_msg", "Erro ao listar as categorias");
    res.redirect("/admin")
  })

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
    res.render("admin/addcategorias", { erros: erros });
  } else{
    try{
    const { name, slug } = req.body;
    const project = await Categoria.create({
      name,
      slug,
    })

    await project.save();
    await req.flash("success_msg", "Categoria criada com sucesso")
    return res.redirect("/categorias")
  }catch(err){
    await req.flash("error_msg")
    return res.redirect("/admin")
  }
  }
  
});
   


module.exports = (app) => app.use("/", router);
