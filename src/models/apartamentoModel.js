var database = require("../database/config")

function contar(tempo, idUsuario) {

        var instrucaoSql = `
        UPDATE aviso SET descricao = '${novaDescricao}' WHERE id = ${idAviso};`
    
}

function somar(tempo, idUsuario, idPagina) {
        var instrucaoSql = `
        INSERT INTO (idtempo, tempo, idusuario, idpagina) aviso VALUES (DEFAULT, '${tempo}', '${idUsuario}', '${idPagina}')`
    
}