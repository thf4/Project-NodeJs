const express = require("express");
const router = express.Router();
const Users = require("../Models/usuario");
const bcrypt = require("bcryptjs");

router.get("/registro", (req, res) => {
  res.render("usuarios/registro");
});

router.post("/registro", (req, res) => {
  var erros = [];
  const { body = {} } = req;
  const { name, password, password2, email } = body;
  if (!name || name.length < 4 || name == undefined) {
    erros.push({ text: "Name Invalid" });
  }
  if (!email || email == null || email == undefined) {
    erros.push({ text: "Email Invalid" });
  }
  if ( password.length < 4 || password == undefined) {
    erros.push({ text: "Password Invalid" });
  }
  if (password2 !== password || password2 == undefined) {
    erros.push({ text: "Password is not equal " });
  }
  if (erros.length > 0) {
    res.render("usuarios/registro", { erros: erros });
  } else {
    const { body = {} } = req;
    const { email } = body;
    Users.findOne(email)
      .then((usuario) => {
        if (usuario) {
          req.flash("success_msg", "Já existe uma conta com este email");
          res.redirect("/usuarios/registro");
        } else {
          const { body = {} } = req;
          const { email, name, password } = body;
          const novoUsuario = new Users({
            name,
            email,
            password
          })
          bcrypt.genSalt(10, (erro, salt)=>{
            bcrypt.hash(novoUsario.senha, salt, (erro, hash)=>{
              if(erro){
                req.flash("error_msg", "Houve um erro ao salvar o usuario ");
                res.redirect("/");
              }
              novoUsuario.senha = hash
              novoUsuario.save().then(()=>{
                req.flash("success_msg", "User create with succsess");
                res.redirect("/")
              })
            }).catch((err)=>{
              req.flash("error_msg", "User create with succsess");
              res.redirect("/")
            })
          })
        }
      })
      .catch((err) => {
        req.flash("error_msg", "Houve erro interno");
        res.redirect("/");
      });
  }
});

module.exports = router;
