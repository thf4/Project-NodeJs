const express = require("express");
const router = express.Router();
const Kit = require("./server");

router.post("/", async (req, res) => {
  try {
    
    const kit = await Kit.create({
      title,
      subtitle,
      
    });
    await kit.save()

    return res.send({ kit });
  } catch (err) {
    console.log(err);
  }
});

module.exports = (app) => app.use("/", router);
