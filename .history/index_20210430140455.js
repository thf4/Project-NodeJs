const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

//SESSÃO
app.use(
  session({
    secret: "Asuhsufeugnineff",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

//Middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src")));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("./Routes/roteadores")(app);

app.listen(3000);
