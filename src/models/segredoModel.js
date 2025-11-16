var database = require("../database/config");

function salvar(idUsuario, pagina) {
    var instrucaoSql = `
        UPDATE segredos SET ${pagina} = 1 WHERE idusuario = ${idUsuario};
    `;
    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscar(idUsuario) {
    var instrucaoSql = `
        SELECT * FROM segredos WHERE idusuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    salvar,
    buscar
};
