const MedicoRepository = require('../entities/medico');

// const inserirMedico = await MedicoRepository.create(MedicoRepository);

// Create medico - criando medico na tabela
async function inserirMedico(value){
    return await MedicoRepository.create(value);
}

// Select Mysql - selecionando medico
async function buscarTodosMedicos(){
    return await MedicoRepository.findAll();
}

async function buscarMedicosId(value){
    return await MedicoRepository.findByPk(value);
}

// Update mysql
async function salvarOuAtualizarMedico(value){
    return await MedicoRepository.upsert(value);
}

// delete myslq
async function deletarMedico(value){
    return await MedicoRepository.destroy({ where: { crm: value}});
}

// Exportando
module.exports = {inserirMedico, buscarTodosMedicos, buscarMedicosId, salvarOuAtualizarMedico,deletarMedico}
