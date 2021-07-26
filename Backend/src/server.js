const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./routes');
const path = require('path');

require('./database');

app.use(cors());
app.use(express.json());
app.use(route);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);