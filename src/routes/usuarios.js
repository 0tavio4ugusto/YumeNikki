var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});
router.post("/checar", function (req, res) {
    usuarioController.checar(req, res);
});

router.post("/somar", function (req, res) {
    usuarioController.somar(req, res);
});

router.post("/contabilizarTempo", function (req, res) {
    usuarioController.contabilizarTempo(req, res);
});





module.exports = router;