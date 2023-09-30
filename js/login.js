const usuario = document.getElementById('user')
const senha = document.getElementById('password')
const mensagemErro = document.getElementById('error')
const botaoEntrar = document.getElementById('entrar')
const botaoCadastrar = document.getElementById('cadastrar')

botaoEntrar.addEventListener("click", () =>{
    if(usuario.value == '' && senha.value == ''){
        usuario.classList.add('input-error')
        senha.classList.add('input-error')
        mensagemErro.style.display='block';
    } 
    
    else{
        usuario.classList.remove('input-error')
        senha.classList.remove('input-error')
        mensagemErro.style.display='none';
    }
})

botaoCadastrar.addEventListener("click", () =>{
    window.location=('./cadastro.html')
})