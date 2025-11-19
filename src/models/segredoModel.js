var database = require("../database/config");

function buscar(idUsuario) {
    var instrucaoSql = `
        SELECT * FROM segredos WHERE idusuario = ${idUsuario};
    `;
    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvar(idUsuario, pagina) {
    var instrucaoSql = `
        UPDATE segredos SET ${pagina} = 1 WHERE idusuario = ${idUsuario};
    `;
    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserir(idUsuario, pagina) {

    // tudo starta zerado

     col = {
        apartamento: 0,
        engrenagens: 0,
        floresta: 0,
        apartamentos: 0,
        cassino: 0,
        escuro: 0,
        livraria: 0
    };

    // a pagina que eu to vira 1
    col[pagina] = 1;

     instrucaoSql = `
        INSERT INTO segredos (
            idusuario,
            apartamento, 
            engrenagens,
            floresta,
            apartamentos,
            cassino,
            escuro,
            livraria
        ) VALUES (
            ${idUsuario},
            ${col.apartamento},
            ${col.engrenagens},
            ${col.floresta},
            ${col.apartamentos},
            ${col.cassino},
            ${col.escuro},
            ${col.livraria}
        );
    `;
    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar,
    salvar,
    inserir
};
