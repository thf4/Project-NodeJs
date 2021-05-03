const express = require("express");
const router = express.Router();
const Kit = require("../Models/server");

router.get("/users", async (req, res) => {
  try {
    const { name, title, subtitle } = req.body
    const kit = await Kit.create({
      name,
      title,
      subtitle,
      user: req.userId,
    });

    return res.render('/html/index.html');
  } catch (err) {
    return res.status(400).send({ error : "Error creating data"})
  }
});

module.exports = (app) => app.use("/", router);
