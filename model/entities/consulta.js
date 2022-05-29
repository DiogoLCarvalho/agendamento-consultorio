// Importa o framework - npm install sequelize
// um framework q pode fazer a mesma coisa q se faz no mysql, do select - create database
const Sequelize = require('sequelize');

// pega o bd
const database = require('../services/bd');

// Criando a entidade
const Consulta = database.define('consulta', {
    // atributos
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    data:{
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Consulta;
