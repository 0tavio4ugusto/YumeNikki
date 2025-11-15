var express = require("express");
var router = express.Router();

router.post("/apartamento", function (req, res) {
    apartamentoController.contar(req, res);
    
});

module.exports = router