const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello word my friends");
});

app.post("/", (req, res) =>{
  res.send("Post is here")
})
app.listen(3000)

