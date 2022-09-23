const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Localidade =  require('../models/Localidade');
const Caminhao= require('../models/Caminhao');
const Viagem = require('../models/Viagem');

const connection = new Sequelize(dbConfig);

Localidade.init(connection);
Caminhao.init(connection);
Viagem.init(connection);

Viagem.associate(connection.models);

module.exports = connection;