var segredosModel = require("../models/segredosModel");

function salvar(req, res) {
    var idUsuario = req.body.idUsuario;
    var pagina = req.body.pagina;

    segredosModel.salvar(idUsuario, pagina)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function buscar(req, res) {
    var idUsuario = req.body.idUsuario;

    segredosModel.buscar(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    salvar,
    buscar
};