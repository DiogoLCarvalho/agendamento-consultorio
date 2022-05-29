// index do projeto - o q executa - node agendamento.js

// Exportar framework express
const express = require('express');

// Joga numa váriavel
const app = express();


// npm install consign
var consign = require('consign');
consign().include('./rest/controller/routes').into(app);

// Carregar o body
app.use(express.urlencoded({extended: true}));
app.use(express.json);

// Executar
app.listen(8081,function () {
    console.log("A API está funcionando");
});

