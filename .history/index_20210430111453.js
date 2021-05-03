const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src")));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("./Routes/roteadores")(app);

app.listen(3000);
