//Máscara de input com o Jquery
$("#data").mask('00/00/0000')
$("#cpf").mask('000.000.000-00')
$("#celular").mask('(00) 00000-0000')

//Validação de preenchimento obrigatório com o Jquery

$(".form").validate({
    rules:{
        nome:{
            required:true,
            minlength: 3,
        },
        sobrenome:{
            required:true,
            minlength: 3
        },
        email:{
            required:true
        },
        data:{
            required:true
        },
        cpf:{
            required:true,
            minlength: 14,
        },
        celular:{
            required:true,
            minlength: 15,
        },
        senha:{
            required:true
        },
        repetirSenha:{
            required:true,
            equalTo:senha
        },
        genero:{
            required:true
        }
    },
    messages:{
        nome:'<span>Este campo é obrigatório!</span>',
        sobrenome:'<span>Este campo é obrigatório!</span>',
        email:'<span>Este campo é obrigatório!</span>',
        data:'<span>Insira sua data de nascimento!</span>',
        cpf:'<span>Insira seu CPF!</span>',
        celular:'<span>Insira seu número de celular!</span>',
        senha:'<span>Esse campo não pode estar vazio!</span>',
        repetirSenha:'<span>Repita a senha digitada!</span>',
        genero:'<span>Selecione seu gênero!</span>'
    }
})

const form = document.getElementById('form')
const cadastro = document.getElementById('criar')
const nome = document.getElementById('name')

