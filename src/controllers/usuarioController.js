var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var nick = req.body.nickServer;
    var senha = req.body.senhaServer;

    if (nick == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }else{

        usuarioModel.autenticar(nick, senha)
            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    res.json({
                        id: resultadoAutenticar[0].idusuario,
                        nick: resultadoAutenticar[0].nick,
                        nome: resultadoAutenticar[0].nome,
                        email: resultadoAutenticar[0].email,
                        senha: resultadoAutenticar[0].senha
                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Nick e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo nick e senha!");
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }

}

function checar(req,res) {
    
    var idUsuario = req.body.idUsuario;

        usuarioModel.checar(idUsuario)
            .then(function(resultadoChecar){
                console.log(`\nResultados encontrados: ${resultadoChecar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoChecar)}`);
                res.json(resultadoChecar)
            })
            .catch(function(erro) {
                console.log(erro)
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            } ) 
    

    
}

function somar(req, res) {
    
    var tempo = req.body.tempo;
    var idUsuario = req.body.idUsuario;
    var idPagina = req.body.idPagina;
    var lista = req.body.lista;

    if (lista != 0) {

        usuarioModel.contar(tempo, idUsuario, idPagina)
            .then(function (resultado) {
                res.json(resultado)
            }).catch(function (erro) {
            console.log("Erro ao contar:", erro);
            res.status(500).json(erro.sqlMessage);
        });
        
    }

    usuarioModel.somar(tempo, idUsuario, idPagina)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao somar:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nick = req.body.nickServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nick == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, nick)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    checar,
    somar
}