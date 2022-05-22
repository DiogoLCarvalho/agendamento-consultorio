const PacienteRepository = require('../entities/paciente');


// Create medico - criando medico na tabela
async function inserirPaciente(value){
    return await PacienteRepository.create(value);
}

// Select Mysql - selecionando medico
async function buscarTodosPacientes(){
    return await PacienteRepository.findAll();
}

async function buscarPacientesId(value){
    return await PacienteRepository.findByPk(value);
}

// Update mysql
async function salvarOuAtualizarPaciente(value){
    return await PacienteRepository.upsert(value);
}

// delete myslq
async function deletarPaciente(value){
    return await PacienteRepository.destroy({ where: { cpf: value}});
}

// Exportando
module.exports = {inserirPaciente, buscarTodosPacientes, buscarPacientesId, salvarOuAtualizarPaciente,deletarPaciente}
