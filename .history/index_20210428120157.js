
const express = require('express')
const app = express();
app.set('./views/index.pug');
require('./roteadors')(app);

app.listen(3000)