const Sequelize = require('sequelize');
const config = require('../config/database');
const Iten = require('../models/Itens');

const connection = new Sequelize(config);
Iten.init(connection);

module.exports = connection;