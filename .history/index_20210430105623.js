const express = require("express");
const handlebars = require('express-handlebars')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars({ defaultLayout : 'main'}))
app.set('view engine', 'handlebars');
require("./Routes/roteadores")(app);

app.listen(3000);
