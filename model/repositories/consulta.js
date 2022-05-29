const ConsultaRepository = require('../entities/consulta');


// Create medico - criando medico na tabela
async function inserirConsulta(value){
    return await ConsultaRepository.create(value);
}

// Select Mysql - selecionando medico
async function buscarTodasConsultas(){
    return await ConsultaRepository.findAll();
}

async function buscarConsultasId(value){
    return await ConsultaRepository.findByPk(value);
}

// Update mysql
async function salvarOuAtualizarConsulta(value){
    return await ConsultaRepository.upsert(value);
}

// delete myslq
async function deletarConsulta(value){
    return await ConsultaRepository.destroy({ where: { id: value}});
}

// Exportando
module.exports = {inserirConsulta, buscarTodasConsultas, buscarConsultasId, salvarOuAtualizarConsulta,deletarConsulta}
