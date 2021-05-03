
const express = require('express')
const app = express();

require('./roteadors')(app);

app.listen(3000)