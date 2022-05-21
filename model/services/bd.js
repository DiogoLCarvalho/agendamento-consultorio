// Instalação npm install mysql2 - framework myslq

const Sequelize = require('sequelize');

// Conectar com o mysql, preenche o host e o port q esta no workbench
//             Sequelize(nome do banco(q esta no mysql)   usuario   senha*funcionou sem senha)
const sequelize = new Sequelize('agendamento', 'root', '',{dialect: 'mysql', host:'localhost', port:3306});


module.exports = sequelize;