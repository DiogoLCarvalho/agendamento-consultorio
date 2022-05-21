// Importa o framework - npm install sequelize
// um framework q pode fazer a mesma coisa q se faz no mysql, do select - create database
const Sequelize = require('sequelize');

// pega o bd
const database = require('../services/bd');

// Criando a entidade
const Paciente = database.define('paciente',{
    // atributos
    cpf:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    rg: Sequelize.INTEGER,
    endereco: Sequelize.STRING,
    telefone: Sequelize.STRING
});

// Exportando
module.exports = Paciente;