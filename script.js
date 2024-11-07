const formularioCadastro = document.getElementById("formulario-cadastro");
const formularioLogin = document.getElementById("formulario-login");
const botaoAbrirCadastro = document.getElementById("botao-cadastro");
const botaoAbrirLogin = document.getElementById("botao-login");

const botaoFinalizarCadastro = document.getElementById("finalizar-cadastro");
const botaoFinalizarLogin = document.getElementById("finalizar-login");

var usuarioExiste = false;
var usuarioEncontrado = false;

const contasSenhas = [
    {
        usuario: "marcos",
        senha: "2712"
    }
];

function abrirCadastro() {
    formularioCadastro.classList.remove("fechado");
    botaoFinalizarCadastro.classList.remove("fechado");
    formularioLogin.classList.add("fechado");
    botaoFinalizarLogin.classList.add("fechado");
    botaoAbrirCadastro.classList.add("botao-apertado");
    botaoAbrirLogin.classList.remove("botao-apertado");
}

function abrirLogin() {
    formularioLogin.classList.remove("fechado");
    botaoFinalizarLogin.classList.remove("fechado");
    formularioCadastro.classList.add("fechado");
    botaoFinalizarCadastro.classList.add("fechado");
    botaoAbrirLogin.classList.add("botao-apertado");
    botaoAbrirCadastro.classList.remove("botao-apertado");
}

function fecharFormulario() {
    formularioCadastro.classList.add("fechado");
    formularioLogin.classList.add("fechado");
    botaoFinalizarLogin.classList.add("fechado");
    botaoFinalizarCadastro.classList.add("fechado");
    botaoAbrirCadastro.classList.remove("botao-apertado");
    botaoAbrirLogin.classList.remove("botao-apertado");
}



function finalizarCadastro() {
    const emailCadIns = document.getElementById("usuario-cadastro").value;
    const senhaCadIns = document.getElementById("senha-cadastro").value;

    if (emailCadIns == "" || senhaCadIns == "")
    {
        alert("Todos os capos devem ser preenchidos");
        return;
    }

    contasSenhas.forEach(contas => {
        if(contas.usuario == emailCadIns){
            alert("Esse usuario ja existe");
            usuarioExiste = true;
        }
    });

    if(usuarioExiste == true){
        usuarioExiste = false;
        return;
    }

    contasSenhas.push({
        usuario: `${emailCadIns}`,
        senha: `${senhaCadIns}`
    })

    alert("Sua conta foi cadastrada");
    console.log(contasSenhas);
    fecharFormulario();
}

function finalizarLogin() {
    const emailLogIns = document.getElementById("usuario-login").value;
    const senhaLogIns = document.getElementById("senha-login").value;

    if (emailLogIns == "" || senhaLogIns == "")
    {
        alert("Todos os capos devem ser preenchidos");
        return;
    }

    contasSenhas.forEach(conta => {
        if(conta.usuario == emailLogIns){
            if(conta.senha == senhaLogIns){
                alert("você se conectou a sua conta com sucesso");
                fecharFormulario();
            } else {
                alert("A senha desse usuario esta incorreta");
            }
            usuarioEncontrado = true;
        }
    })

    if(usuarioEncontrado == false){
        alert("Esse usuario não esta cadastrado")
    }
}