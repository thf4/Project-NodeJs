
const express = require('express')
const app = express();

require('./index')(app);

app.listen(3000)