const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello word my friends");
});

app.post("/", (req, res) => {
  res.send("Post is here");
});

app.all('/secret', (req, res, next)=>{
  console.log("I am promise...")
  next();
  res.send('I am ok')
})
app.listen(3000);
