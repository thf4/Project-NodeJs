const express = require("express")
const router = express.Router();
const mongoose = require("mongoose");
const Users = require("../Models/usuario")

router.get("/registro", (req,res) =>{
  res.render("usuarios/registro")
})

router.post("/registro", (req, res) =>{
  var erros = [];
  const { body={} } = req
  const { name, password, password2, email } = body
  if(!name || name == null || name == undefined){erros.push({ text: "Name Invalid"})};
  if(!email || email == null || email == undefined){erros.push({ text: "Email Invalid"})};
  if(!password || password.lenght < 4 || password == undefined){erros.push({ text: "Password Invalid"})};
  if(!password2 || password2 !== password || password2 == undefined){erros.push({ text: "Password is not equal "})};
})

module.exports = router