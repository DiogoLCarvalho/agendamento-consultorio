// Importa o framework - npm install sequelize
// um framework q pode fazer a mesma coisa q se faz no mysql, do select - create database
const Sequelize = require('sequelize');

// pega o bd
const database = require('../services/bd');

// Relacionamento com Consulta
const Consulta = require('./consulta');

// Criando a entidade
const Medico = database.define('medico',{
    // atributos
    crm:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: Sequelize.STRING
});

// Chave estrangeira
Medico.hasMany(Consulta, {foreignKey: {name: 'id_Medico', allowNull: false}});

// Exportando
module.exports = Medico;