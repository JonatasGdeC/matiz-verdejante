//Variáveis da página de login
const usuario = document.getElementById('user')
const senha = document.getElementById('password')
const mensagemErro = document.getElementById('error')
const botaoEntrar = document.getElementById('entrar')
const botaoCadastrar = document.getElementById('cadastrar')
const botaoCliente = document.getElementById('cliente')
const botaoVendedor = document.getElementById('vendedor')

function erroMensagem(){
    usuario.classList.add('input-error')
    senha.classList.add('input-error')
    mensagemErro.style.display='block';
}

var vendedor
botaoVendedor.addEventListener('click', ()=>{
    botaoVendedor.classList.remove('button-secundario')
    botaoVendedor.classList.add('button-principal')
    botaoCliente.classList.remove('button-principal')
    botaoCliente.classList.add('button-secundario')
    vendedor = true
})

botaoCliente.addEventListener('click', ()=>{
    botaoVendedor.classList.add('button-secundario')
    botaoVendedor.classList.remove('button-principal')
    botaoCliente.classList.add('button-principal')
    botaoCliente.classList.remove('button-secundario')
})

//Validação do sistema após o click do botão "Entrar"
botaoEntrar.addEventListener("click", () =>{
    if(usuario.value == '' || senha.value == ''){
        erroMensagem()
        mensagemErro.innerText='Preencha todos os campos!'
    } else if (usuario.value !== 'admin' || senha.value !== 'admin'){
        erroMensagem()
        mensagemErro.innerText='Usuário ou senha incorretos!'
    }
    else{
        usuario.classList.remove('input-error')
        senha.classList.remove('input-error')
        mensagemErro.style.display='none';
        if(vendedor == true){
            window.location=('./home/vendedor.html')
        } else {
            window.location=('./home/cliente.html')
        }
    }
})

botaoCadastrar.addEventListener("click", () =>{
    if(botaoCliente.classList.contains('button-principal')){
        window.location=('./cadastro/cliente.html')
    } else {
        window.location=('./cadastro/vendedor.html')
    }
})

