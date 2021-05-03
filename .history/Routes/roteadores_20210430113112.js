const express = require("express");
const router = express.Router();
const Kit = require("../Models/server");

router.get("/", (req, res) => {
  res.render("admin/index");
});

router.get("/categorias", (req, res) => {
  res.render("admin/categorias");
});

router.get("/categorias/add", (req, res) => {
  res.render("admin/addcategorias");
});

router.post("/users", async (req, res) => {
  try {
    const { name, title, subtitle } = req.body;
    const kit = await Kit.create({
      name,
      title,
      subtitle,
      user: req.userId,
    });

    return res.send({ kit });
  } catch (err) {
    return res.status(400).send({ error: "Error creating data" });
  }
});

module.exports = (app) => app.use("/", router);
