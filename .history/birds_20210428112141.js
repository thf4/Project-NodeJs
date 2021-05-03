const index = require('./index.js')
const express = require('express')
const app = express();
app.use('/index.js', index)