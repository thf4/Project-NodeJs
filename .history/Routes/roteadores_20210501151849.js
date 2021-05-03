const express = require("express");
const router = express.Router();
const Categoria = require("../Models/categorias");
const Postagens = require("../Models/Postagens");

router.get("/", (req, res) => {
  res.render("admin/index");
});

router.get("/admin/categorias/criar", (req, res) => {
  res.render("admin/addcategorias");
});

router.get("/categorias", (req, res) => {
  Categoria.find()
    .lean()
    .sort({ date: "desc" })
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

router.get("/admin/categorias/edit/:id", (req, res) => {
  Categoria.findOne({ _id: req.params.id })
    .then((categorias) => {
      res.render("admin/editcategoria", { categorias: categorias.toJSON() });
    })
    .catch((err) => {
      req.flash("error_msg", "Esta categoria não existe");
      res.redirect("/categorias");
    });
});

router.post("/admin/categorias/edit", (req, res) => {
  Categoria.findOne({ _id: req.body.id }).then((categorias) => {
    categorias.name = req.body.name;
    categorias.slug = req.body.slug;

    categorias
      .save()
      .then(() => {
        req.flash("success_msg", "Categoria editada com sucesso!");
        res.redirect("/categorias");
      })
      .catch((err) => {
        req.flash("error_msg", "Houve erro ao salvar categoria");
        res.redirect("/categorias");
      });
  });
});

router.post("/admin/categorias/deletar", (req, res) => {
  Categoria.remove({ _id: req.body.id })
    .then(() => {
      req.flash("success_msg", "Categoria deletada com sucesso!");
      res.redirect("/categorias");
    })
    .catch((err) => {
      req.flash("error_msg", "Erro ao deletar ");
      res.redirect("/categorias");
    });
});

router.get("/admin/postagens", (req, res) => {
  Postagens.find()
    .populate("categoria")
    .lean()
    .sort({ data: "desc" })
    .then((postagens) => {
      res.render("admin/postagens", { postagens: postagens });
    })
    .catch((err) => {
      req.flash("error_msg", "Error to list posts");
      res.redirect("/admin/postagens");
    });
});

router.get("/admin/postagens/add", (req, res) => {
  Categoria.find()
    .lean()
    .then((categorias) => {
      res.render("admin/addPostagens", { categorias: categorias });
    })
    .catch((err) => {
      req.flash("error_msg", "Error to create a post");
      res.redirect("/categorias");
    });
});

router.post("/admin/postagens/nova", async (req, res) => {
  const { body = {} } = req;
  const { titulo, descricao, conteudo, slug, categoria } = body;
  const erros = [];
  if (categoria == "0") {
    erros.push({ text: "Categoria invalida, registe uma categoria" });
  }
  if (titulo.length < 0) {
    erros.push({ text: "Tittle too short" });
  }
  if (!slug && slug.length < 0) {
    erros.push({ text: "You need write a slug " });
  }
  if (conteudo.length < 0) {
    erros.push({ text: "You need write some words here " });
  }
  if (descricao.length < 0) {
    erros.push({ text: "You need write some words here " });
  } else {
    try {
      const { titulo, descricao, conteudo, slug, categoria } = req.body;
      const post = await Postagens.create({
        titulo,
        descricao,
        conteudo,
        slug,
        categoria,
      });
      await post.save();
      req.flash("success_msg", "Post created successful");
      res.redirect("/admin/postagens");
    } catch (err) {
      req.flash("error_msg", "Post error created ");
      res.redirect("/admin/postagens");
    }
  }
});
router.post("/admin/postagens/deletar", (req, res) => {
  Postagens.deleteOne({ _id: req.body.id })
    .then(() => {
      req.flash("success_msg", "Postagem deletada com sucesso!");
      res.redirect("/admin/postagens");
    })
    .catch((err) => {
      req.flash("error_msg", "Erro ao deletar ");
      res.redirect("/admin/postagens");
    });
});

router.get("/admin/postagens/edit/:id", (req, res) => {
  Postagens.findOne({ _id: req.params.id })
    .lean()
    .then((postagens) => {
      Categoria.find()
        .lean()
        .then((categorias) => {
          res.render("admin/editpostagens", {
            categorias: categorias,
            postagens: postagens,
          });
        })
        .catch((err) => {
          req.flash("error_msg", "Error to find categories");
        });
    })
    .catch((err) => {
      req.flash("error_msg", "Error to find post");
      res.redirect("admin/editpostagens");
    });
});

router.post("/admin/postagens/edit", async (req, res) => {
  Postagens.findOne({_id: req.body.id }).then((postagens) =>{
    postagens.titulo = req.body.titulo
    postagens.slug = req.body.slug
    postagens.descricao = req.body.descricao
    postagens.conteudo = req.body.conteudo
    postagens.categoria = req.body.categoria

    postagens.save()
    req.flash("success_msg", "Categoria editada com sucesso!");
    res.redirect("/admin/postagens");
  }).catch ((err) =>{
    console.log(err)
    req.flash("error_msg", "Houve erro ao salvar postagem");
    res.redirect("/admin/postagens");
  })
});

module.exports = (app) => app.use("/", router);
