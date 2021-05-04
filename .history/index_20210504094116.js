const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
app.use(flash());
//SESSÃO
app.use(
  session({
    secret: "Asuhsufeugnineff",
    resave: true,
    saveUninitialized: true,
  })
);
const admin = require("./Routes/admin")
const users = require("./Routes/usuarios")

//Middleware
require("./Middleware/midle")(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src")));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("./Routes/roteadores")(app);
app.use("/admin", admin)
app.use("/usuario", users)
app.listen(3000);
