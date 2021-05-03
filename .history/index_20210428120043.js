
const express = require('express')
const app = express();
app.set('view engine', 'pug');
require('./roteadors')(app);

app.listen(3000)