//Variáveis da página de login
const usuario = document.getElementById('user')
const senha = document.getElementById('password')
const mensagemErro = document.getElementById('error')
const botaoEntrar = document.getElementById('entrar')
const botaoCadastrar = document.getElementById('cadastrar')

//Mensagem de Erro
function erroMensagem(){
    usuario.classList.add('input-error')
    senha.classList.add('input-error')
    mensagemErro.style.display='block';
}

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
        window.location=('./homeUsers.html')
    }
})

//Funcionalidade do botão cadastrar 
botaoCadastrar.addEventListener('click', ()=>{
    window.location=('./cadastro.html')
})
