const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("./roteadors")(app);

app.listen(300);
