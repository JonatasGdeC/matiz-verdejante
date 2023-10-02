$("#data").mask('00/00/0000')
$("#cpf").mask('000.000.000-00')
$("#celular").mask('(00) 00000-0000')

$(".form").validate({
    rules:{
        nome:{
            required:true
        },
        sobrenome:{
            required:true
        },
        email:{
            required:true
        },
        data:{
            required:true
        },
        cpf:{
            required:true
        },
        celular:{
            required:true
        },
        senha:{
            required:true
        },
        repetirSenha:{
            required:true
        },
    },
    messages:{
        nome:'<span>Insira seu nome!</span>',
        sobrenome:'<span>Insira seu sobrenome!</span>',
        email:'<span>Insira seu email!</span>',
        data:'<span>Insira sua data de nascimento!</span>',
        cpf:'<span>Insira seu CPF!</span>',
        celular:'<span>Insira seu número de celular!</span>',
        senha:'<span>Esse campo não pode estar vazio!</span>',
        repetirSenha:'<span>Repita a senha digitada!</span>',
    }
})

const requisitos = document.getElementById('list')
const senha = document.getElementById('senha')


senha.addEventListener('keyup', ()=>{
    const contemNumero = /[0-9]/.test(senha);
    if(!contemNumero){
        requisitos.children[3].style.color='green'
    } else {
        requisitos.children[3].style.color='red'
    }
})


