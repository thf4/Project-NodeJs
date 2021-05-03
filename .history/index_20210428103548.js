const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello word my friends");
});

app.post("/", (req, res) => {
  res.send("Post is here");
});

app.all('/secret', (req, res, next)=>{
  app.post('/', (req, res)=>{ res.send('I am ok')})
  next();
  
})
app.listen(3000);
