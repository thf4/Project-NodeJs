
const express = require('express')
const app = express();
app.set( 'pug');
require('./roteadors')(app);

app.listen(3000)