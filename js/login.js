const usuario = document.getElementById('user')
const senha = document.getElementById('password')
const mensagemErro = document.getElementById('error')
const botaoEntrar = document.getElementById('entrar')
const botaoCadastrar = document.getElementById('cadastrar')

function erroPreenchimento(){
    usuario.classList.add('input-error')
    senha.classList.add('input-error')
    mensagemErro.style.display='block';
    mensagemErro.innerText = "Preencha todos os campos"
}

botaoEntrar.addEventListener("click", () =>{
    if(usuario.value == '' || senha.value == ''){
        erroPreenchimento()
    } 
})