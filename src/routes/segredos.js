const express = require("express");
const router = express.Router();
const segredosController = require("../controllers/segredosController");


router.post("/salvar", function(req, res) {
    segredosController.salvar(req, res);
});

router.post("/buscar", function(req, res) {
    segredosController.buscar(req, res);
});

router.post("/inserir", function(req, res) {
    segredosController.inserir(req, res);
});

router.post("/contar", function(req, res) {
    segredosController.contar(req, res);
});


module.exports = router;