const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello word my friends");
});



app.all('/secret',async (req, res, next)=>{
  await console.log("I am promise...")
  res.send('I am the best to the cloud9')
   next('route');
})

app.post("/secret", (req, res) => {
  console.log(err)
  res.send("Post is here");
});
app.listen(3000);
