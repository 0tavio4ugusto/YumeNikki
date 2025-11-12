// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nick = sessionStorage.NICK_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nick != null) {
        b_usuario.innerHTML = nick;
    } else {
        window.location = "../meulogin.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../meulogin.html";
}


