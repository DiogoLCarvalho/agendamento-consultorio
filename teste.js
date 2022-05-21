// A instalação se da pelo npm
// Chama a Biblioteca do express (framework)
const express = require('express');

// Joga numa váriavel
const app = express();


// ROTAS DA PÁGINA

// A rota do endereço que você coloca no URL, o barra seria tipo o raiz (rota vazia)
app.get("/",function (req,resp) {
   resp.send("Bem vindo ao meu app!") //Envia uma resposta 
});

// Por exemplo se vc colocar localhost:8081/contato ele te joga na página do contato
app.get("/contato",function (req,resp) {
   resp.send("Você esta na página contato!") 
});

app.get("/produto",function (req,resp) {
   resp.send("Você esta na página produto!") 
});


// ROTA dinâmica - aqui ele pega os dados da URL e joga no parâmetro aqui;colocando na página.
app.get("/dados/:nome/:cargo",function (req,resp) {
    resp.send(`<h1> Olá sr(a). ${req.params.nome} </h1> <h2>Seu cargo é ${req.params.cargo}
    </h2>`);
});
// Vc pode colocar o parametro direto na na pagina URL.
// Exemplo localhost:3000/?name=DiogoL.
// Assim vc não precisa colocar o q esta no get() e tem q colcoar o req.params.nome.F




// Iniciar o servidor. Para parar o servidor aperte ctrl + c no terminal

// Listen abrir uma porta na sua máquina
app.listen(8081,function () {
    console.log("O servidor está funcionando");
})

// Instalação nodemon = para não precisar ficar fechando e abrindo no terminal
// Para você usar para usar nodemon nomeArquivo.js - em vez de - node nomeArquivo.js