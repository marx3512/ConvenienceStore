const express = require('express');
const app = express();
const route = require('./routes');

require('./database');

app.use(express.json());
app.use(route);

app.listen(3333);