// index do projeto - o q executa - node agendamento.js

// Exportar framework express
const express = require('express');

// Joga numa váriavel
const app = express();

// sincronizar com o Mysql workbench
(async () =>{
    const database = require('./model/services/bd');

    // Esta exportando para o mysql a entidade medico
    const medico = require('./model/entities/medico');
    const paciente = require('./model/entities/paciente');

    try{
        const resultado = await database.sync();
        console.log(resultado)
    } catch (error){
        console.log(error);
    }

})();


// Conectar com o html, rotas
// Tem q arrumar o caminho das pastas

// npm install ejs 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
var path = require('path');
app.set('views', path.join(__dirname, '/view/'));

// npm install body-parser
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// npm install consign
var consign = require('consign');
consign().include('controller/routes', ).into(app);


// Executar
app.listen(8081,function () {
    console.log("O servidor está funcionando");
});