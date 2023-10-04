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
            required:true
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

const createSpan = document.createElement('span') //Criação de span com mensagem de erro
const regex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //Regra de existência de números ou caracteres especiais

const form = document.getElementById('form')
const nome = document.getElementById('name')
const sobrenome = document.getElementById('last-name')
const senha1 = document.getElementById('senha')
const senha2 = document.getElementById('repetirSenha')
const requisitos = document.getElementById('list')

//Validação de números e caracteres especiais no input nome
nome.addEventListener('keyup', ()=>{
    if(regex.test(nome.value)){
        createSpan.textContent='Não escreva números ou caracteres especiais!'
        nome.insertAdjacentElement('afterend', createSpan)
    } else {
        createSpan.remove()
    }
})

//Validação de números e caracteres especiais no input sobrenome
sobrenome.addEventListener('keyup', ()=>{
    if(regex.test(sobrenome.value)){
        createSpan.textContent='Não escreva números ou caracteres especiais!'
        sobrenome.insertAdjacentElement('afterend', createSpan)
    } else {
        createSpan.remove()
    }
})

senha2.addEventListener('focusout', ()=>{
    if(senha2.value !== senha1.value){
        createSpan.textContent='As senhas devem ser iguais'
        senha1.insertAdjacentElement('afterend', createSpan)
        senha2.insertAdjacentElement('afterend', createSpan)
    } else{
        createSpan.remove()
    }
})


senha1.addEventListener('keyup', ()=>{
    //Verificação se campo de senha tem letra maiúscula
    const contemLetraMaiscula = /[A-Z]/.test(senha1.value)
    if(contemLetraMaiscula){
        requisitos.children[1].style.color='green'
    } else {
        requisitos.children[1].style.color='black'
    }
    //Verificação se campo de senha tem letra minúscula
    const contemLetraMinuscula = /[a-z]/.test(senha1.value)
    if(contemLetraMinuscula){
        requisitos.children[2].style.color='green'
    } else {
        requisitos.children[2].style.color='black'
    }
    //Verificação se campo de senha tem número
    const contemNumero = /[0-9]/.test(senha1.value);
    if(contemNumero){
        requisitos.children[3].style.color='green'
    } else {
        requisitos.children[3].style.color='black'
    }
    //Verificação se campo de senha tem caractere especial
    const contemCaractereEsp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senha1.value)
    if(contemCaractereEsp){
        requisitos.children[4].style.color='green'
    } else{
        requisitos.children[4].style.color='black'
    }

})





