//Máscara de input com o Jquery
$("#cpf").mask('000.000.000-00')
$("#celular").mask('(00) 00000-0000')
$("#cep").mask('00000-000')

const createSpan = document.createElement('span') //Criação de span com mensagem de erro
const regex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //Regra de existência de números ou caracteres especiais
const digitosEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //Regra para verificação do email

const formCliente = document.getElementById('formCliente')
const formVendedor = document.getElementById('formVendedor')

//Campos de input comuns nos dois formulários de cadastro
const nome = document.getElementById('name')
const sobrenome = document.getElementById('last-name')
const email = document.getElementById('email')
const cpf = document.getElementById('cpf')
const telefone = document.getElementById('celular')
const senha1 = document.getElementById('senha')
const senha2 = document.getElementById('repetirSenha')

//Lista de requisitos de senha
const requisitos = document.getElementById('list')

//Modal mensagem
const mensageSucess = document.getElementById('mensage')
const btnClose = document.getElementById('btnClose')
const bodyCadastro = document.getElementById('bodyCadastro')

// ------------------------------> Validações em campos comuns <-----------------------------------

//Validação de números e caracteres especiais no input nome
var nomeCorreto = nome.addEventListener('keyup', (e)=>{
    if(regex.test(nome.value)){
        createSpan.textContent='Não escreva números ou caracteres especiais!'
        nome.insertAdjacentElement('afterend', createSpan)
        return nomeCorreto = false
    }else if (nome.value == '' || nome.value.length < 3){
        createSpan.textContent='Este campo é obrigatório!'
        nome.insertAdjacentElement('afterend', createSpan)
        return nomeCorreto = false
    } else {
        createSpan.remove()
        return nomeCorreto = true
    } 
})

//Validação de números e caracteres especiais no input sobrenome
var sobrenomeCorreto = sobrenome.addEventListener('keyup', ()=>{
    if(regex.test(sobrenome.value)){
        createSpan.textContent='Não escreva números ou caracteres especiais!'
        sobrenome.insertAdjacentElement('afterend', createSpan)
        return sobrenomeCorreto = false
    } else if (sobrenome.value == '' || sobrenome.value.length < 3){
        createSpan.textContent='Este campo é obrigatório!'
        sobrenome.insertAdjacentElement('afterend', createSpan)
        return sobrenomeCorreto = false
    } else {
        createSpan.remove()
        return sobrenomeCorreto = true
    }
})

//Verificação do campo de cpf
var cpfCorreto = cpf.addEventListener('focusout', ()=>{
    if(cpf.value == '' || cpf.value.length < 14){
        createSpan.textContent='Preencha o campo corretamente!'
        cpf.insertAdjacentElement('afterend', createSpan)
        return cpfCorreto = false
    } else{
        createSpan.remove()
        return cpfCorreto = true
    }
})

//Verificação do campo de email
var emailCorreto = email.addEventListener('keyup', ()=>{
    if(!digitosEmail.test(email.value)){
        createSpan.textContent='Insira um email valido!'
        email.insertAdjacentElement('afterend', createSpan)
        return emailCorreto = false
    } else if (email.value == ''){
        createSpan.textContent='Este campo é obrigatório!'
        email.insertAdjacentElement('afterend', createSpan)
        return emailCorreto = false
    } else{
        createSpan.remove()
        return emailCorreto = true
    }
})

//Verificação do campo celular
var celularCorreto = telefone.addEventListener('focusout', ()=>{
    if(telefone.value == '' || telefone.value.length < 15){
        createSpan.textContent='Digite seu número de celular!'
        telefone.insertAdjacentElement('afterend', createSpan)
        return celularCorreto = false
    } else {
        createSpan.remove()
        return celularCorreto = true
    }
})

//Verificação dos requisitos da senha 1
var senha1Correta = senha1.addEventListener('keyup', ()=>{

    //Verificação se campo de senha possui oito ou mais caracteres
    if(senha1.value.length >= 8){
        requisitos.children[0].style.color='green'
    }else{
        requisitos.children[0].style.color='black'
    }

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

    //Mensagem de erro quando sai do input
    senha1.addEventListener('focusout', () => {
        if(senha1.value.length < 8 || !contemLetraMaiscula || !contemLetraMinuscula || !contemNumero || !contemCaractereEsp){
            createSpan.textContent='Obedeça todos os requisitos abaixo!'
            senha1.insertAdjacentElement('afterend', createSpan)
        } else {
            createSpan.remove()
        }
    })

    if(senha1.value.length >= 8 && contemLetraMaiscula && contemLetraMinuscula && contemNumero && contemCaractereEsp){
        return senha1Correta = true
    } else {
        return senha1Correta = false
    }
})

//Validação se a senha1 é igual a senha2
var senha2Correta = senha2.addEventListener('focusout', ()=>{
    if(senha2.value !== senha1.value){
        createSpan.textContent='As senhas devem ser iguais'
        senha1.insertAdjacentElement('afterend', createSpan)
        senha2.insertAdjacentElement('afterend', createSpan)
        return senha2Correta = false
    } else{
        createSpan.remove()
        return senha2Correta = true
    }
})