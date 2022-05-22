const medicoRepository = require('../../model/repositories/medico');
const Medico = require('../../model/entities/medico');

module.exports = function (app) {
    // Quando chegar esta rota exiba a pagina cadastro - que esta no view
    app.get('/cadastro', function (req, res) {
        res.render('medico/cadastro');
    });

    // De der certo ou errado execute
    app.post('/cadastro/medico/edit/salvar', async (req, res) => {
        var Medico = {
            nome: req.body.nome,
            crm: req.body.crm,
            telefone: req.body.telefone
        };
        try {
            await medicoRepository.salvarOuAtualizarMedico(Medico);
            res.redirect('../../../../lista/medico');
        } catch (error) {
            console.log(error);
            res.render('medico/error', {mensagem: 'Erro ao cadastrar'});
        }
    });

    app.post('/cadastro/medico/salvar', async (req, res) => {
        var Medico = {
            nome: req.body.nome,
            crm: req.body.crm,
            telefone: req.body.telefone
        };
        try {
            await medicoRepository.inserirMedico(Medico);
            res.redirect('../../../lista/medico');
        } catch (error) {
            console.log(error);
            res.render('medico/error', {mensagem: 'Erro ao cadastrar'});
        }
    });

    app.get('/delete/medico/:id', async (req, res) => {
        try {
            var id = req.params.id;
            await medicoRepository.deletarMedico(id);
            res.redirect('../../lista/medico');
        } catch (err) {
            console.log(err);
            res.render('medico/error', {mensagem: 'Erro ao cadastrar'});
        }
    });
    app.get('/edit/medico/:id', async (req, res) => {
        try {
            var id = req.params.id;
            const value = await medicoRepository.buscarMedicosId(id);
            res.render('medico/edit', value.get(0));
        } catch (err) {
            next(err);
        }
    });
    app.get('/lista/medico', async (req, res,next) => {
        try {
            const docs = await medicoRepository.buscarTodosMedicos();
            res.render('medico/list', {mensagem: 'Lista de Médicos', docs});
        } catch (err) {
            next(err);
        }
    });
}