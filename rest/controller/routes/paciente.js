// const pacienteRepository = require('../../model/repositories/paciente');
// const Paciente = require('../../model/entities/paciente');

// module.exports = function (app) {
//     // Quando chegar esta rota exiba a pagina cadastro - que esta no view
//     app.get('/cadastro/paciente', function (req, res) {
//         res.render('paciente/cadastro');
//     });

//     // De der certo ou errado execute
//     app.post('/cadastro/paciente/edit/salvar', async (req, res) => {
//         var Paciente = {
//             nome: req.body.nome,
//             cpf: req.body.cpf,
//             telefone: req.body.telefone,
//             rg: req.body.rg,
//             endereco: req.body.endereco,
//         };
//         try {
//             await pacienteRepository.salvarOuAtualizarPaciente(Paciente);
//             res.redirect('../../../../lista/paciente');
//         } catch (error) {
//             console.log(error);
//             res.render('paciente/error', {mensagem: 'Erro ao cadastrar'});
//         }
//     });

//     app.post('/cadastro/paciente/salvar', async (req, res) => {
//         var Paciente = {
//             nome: req.body.nome,
//             cpf: req.body.cpf,
//             telefone: req.body.telefone,
//             rg: req.body.rg,
//             endereco: req.body.endereco,
//         };
//         try {
//             await pacienteRepository.inserirPaciente(Paciente);
//             res.redirect('../../../lista/paciente');
//         } catch (error) {
//             console.log(error);
//             res.render('paciente/error', {mensagem: 'Erro ao cadastrar'});
//         }
//     });

//     app.get('/delete/paciente/:id', async (req, res) => {
//         try {
//             var id = req.params.id;
//             await pacienteRepository.deletarPaciente(id);
//             res.redirect('../../lista/paciente');
//         } catch (err) {
//             console.log(err);
//             res.render('paciente/error', {mensagem: 'Erro ao cadastrar'});
//         }
//     });
//     app.get('/edit/paciente/:id', async (req, res) => {
//         try {
//             var id = req.params.id;
//             const value = await pacienteRepository.buscarPacientesId(id);
//             res.render('paciente/edit', value.get(0));
//         } catch (err) {
//             next(err);
//         }
//     });
//     app.get('/lista/paciente', async (req, res,next) => {
//         try {
//             const docs = await pacienteRepository.buscarTodosPacientes();
//             res.render('paciente/list', {mensagem: 'Lista de Pacientes', docs});
//         } catch (err) {
//             next(err);
//         }
//     });
// }