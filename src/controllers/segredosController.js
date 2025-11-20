var segredosModel = require("../models/segredoModel");

function inserir(req, res) {
    var idUsuario = req.body.idUsuario;
    var pagina = req.body.pagina;

    segredosModel.inserir(idUsuario, pagina)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro no INSERT:", erro);
            res.status(500).json(erro);
        });
}

function salvar(req, res) {
    var idUsuario = req.body.idUsuario;
    var pagina = req.body.pagina;

    segredosModel.salvar(idUsuario, pagina)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
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

function contar(req, res) {
    var idUsuario = req.body.idUsuario;

    segredosModel.contar(idUsuario)
    .then(function (resultadoContar) {
        res.json(resultadoContar);
        console.log(JSON.stringify(resultadoContar));
        

    }).catch(function (erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    inserir,
    salvar,
    buscar,
    contar
};
