const consultaRepository = require('../../model/repositories/consulta');

module.exports = function (app) {
    // Quando chegar esta rota exiba a pagina cadastro - que esta no view
    app.get('/cadastro/consulta', function (req, res) {
        res.render('consulta/cadastro');
    });

    // De der certo ou errado execute
    app.post('/cadastro/consulta/edit/salvar', async (req, res) => {
        var Consulta = {
            data: req.body.data,
            id_Medico: req.body.crm,
            id_paciente: req.body.cpf,
            id: req.body.id
        };
        try {
            await consultaRepository.salvarOuAtualizarConsulta(Consulta);
            res.redirect('../../../../lista/consulta');
        } catch (error) {
            console.log(error);
            res.render('consulta/error', {mensagem: 'Erro ao cadastrar'});
        }
    });

    app.post('/cadastro/consulta/salvar', async (req, res) => {
        var Consulta = {
            data: req.body.data,
            id_Medico: req.body.crm,
            id_paciente: req.body.cpf,
            id: req.body.id
        };
        try {
            await consultaRepository.inserirConsulta(Consulta);
            res.redirect('../../../lista/consulta');
        } catch (error) {
            console.log(error);
            res.render('consulta/error', {mensagem: 'Erro ao cadastrar'});
        }
    });

    app.get('/delete/consulta/:id', async (req, res) => {
        try {
            var id = req.params.id;
            await consultaRepository.deletarConsulta(id);
            res.redirect('../../lista/consulta');
        } catch (err) {
            console.log(err);
            res.render('consulta/error', {mensagem: 'Erro ao cadastrar'});
        }
    });
    app.get('/edit/consulta/:id', async (req, res) => {
        try {
            var id = req.params.id;
            const value = await consultaRepository.buscarConsultasId(id);
            res.render('consulta/edit', value.get(0));
        } catch (err) {
            next(err);
        }
    });
    app.get('/lista/consulta', async (req, res,next) => {
        try {
            const docs = await consultaRepository.buscarTodasConsultas();
            res.render('consulta/list', {mensagem: 'Lista de Consultas', docs});
        } catch (err) {
            next(err);
        }
    });
}