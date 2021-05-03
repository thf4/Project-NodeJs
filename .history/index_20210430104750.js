const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', handlebars({ defaultLayout : 'main'}))
require("./Routers/roteadores")(app);

app.listen(3000);
