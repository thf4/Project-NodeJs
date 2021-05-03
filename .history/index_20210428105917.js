const express = require("express");
const app = express();





app.all('/secret',async (req, res, next)=>{

  await  res.send('I am the best to the cloud9')
   next('route');
   app.post ("/secret", (req, res) => {
    req.send("Hello word my friends");
  });
})


app.listen(3000);
