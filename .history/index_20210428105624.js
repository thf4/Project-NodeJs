const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello word my friends");
});



app.all('/secret',async (req, res, next)=>{
  await console.log("I am promise...")
  res.send('I am the best to the cloud9')
   next('route');
   res.send("Post is here");
})

app.post("/secret", (req, res) => {
  
});
app.listen(3000);
