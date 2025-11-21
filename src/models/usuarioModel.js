const { contabilizar } = require("../controllers/usuarioController");
var database = require("../database/config")

function autenticar(nick, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nick, senha)
    var instrucaoSql = `
        SELECT * FROM usuarios WHERE nick = '${nick}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, nick) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, nick);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, senha, nick) VALUES ('${nome}', '${email}', '${senha}', '${nick}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function checar(idUsuario, idPagina) {
    var instrucaoSql = `
    SELECT * FROM tempo WHERE idusuario = '${idUsuario}' AND idpagina = '${idPagina}'`

    console.log("aaaExecutando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function contar(tempo, idUsuario, idPagina) {

    var instrucaoSql = `
        UPDATE tempo SET tempo = '${tempo}' WHERE idusuario = ${idUsuario} AND idpagina = ${idPagina};`
    return database.executar(instrucaoSql);


}

function somar(tempo, idUsuario, idPagina) {
    var instrucaoSql = `
        INSERT INTO tempo (idtempo, tempo, idusuario, idpagina) VALUES (DEFAULT, '${tempo}', '${idUsuario}', '${idPagina}')`
    return database.executar(instrucaoSql);


}
function contabilizarTempo(idUsuario) {
    var instrucaoSql = `
        SELECT * FROM tempo WHERE idusuario = ${idUsuario};
    `;
    console.log("aaaExecutando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    checar,
    contar,
    somar,
    contabilizarTempo
};