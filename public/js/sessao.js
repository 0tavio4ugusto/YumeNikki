// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nick = sessionStorage.NICK_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nick != null) {
        b_usuario.innerHTML = nick;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../meulogin.html";
}


