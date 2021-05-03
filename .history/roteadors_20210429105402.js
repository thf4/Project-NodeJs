const express = require("express");
const router = express.Router();
const Kit = require("./server");

router.get("/users", async (req, res) => {
  try {
    const { name, title, subtitle } = req.body;
    const kit = await Kit.create({
      name,
      title,
      subtitle,
      user: req.userId
    });

    return res.send({ kit });
  } catch (err) {
    console.log(err);
  }
});

module.exports = (app) => app.use("/", router);
