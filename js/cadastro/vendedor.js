//Campos de input do formulário de cadastro de vendedor
const cep = document.getElementById('cep')
const endereco = document.getElementById('endereco')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')
const descricao = document.getElementById('descricao')

//Verificação do campo de CEP
var cepCorreto = cep.addEventListener('focusout', ()=>{
    if(cep.value == '' || cep.value.length < 9){
        createSpan.textContent='Preencha este campo corretamente!'
        cep.insertAdjacentElement('afterend', createSpan)
        endereco.value = ''
        cidade.value = ''
        estado.value = ''
        return cepCorreto = false
    } else {
        createSpan.remove()
        const valorCep = cep.value
        const endpoint = `https://viacep.com.br/ws/${valorCep}/json`

        fetch(endpoint).then(function(resposta){
            return resposta.json();
        }).then(function(json){
            endereco.value = `${json.logradouro}, ${json.bairro}`
            cidade.value = json.localidade
            estado.value = json.uf
        })
        return cepCorreto = true
    }
})

descricao.addEventListener('focusin', ()=>{
    if( descricao.value=='' || descricao.value.length < 50){
        createSpan.textContent='Escreva no mínimo 50 caracteres!'
        descricao.insertAdjacentElement('afterend', createSpan)
    } else {
        createSpan.remove()
    }
})

formVendedor.addEventListener('submit', (e)=>{
    if(!nomeCorreto || !sobrenomeCorreto || !cpfCorreto || !emailCorreto || !celularCorreto || !cepCorreto || !senha1Correta || !senha2Correta){
        alert("Preencha todos os campos corretamente!")
        e.preventDefault()
    } else{
        mensageSucess.style.display='block'
        btnClose.addEventListener('click', ()=>{
            window.location=('./login.html')
        })
        if (mensageSucess.style.display='block') {
            bodyCadastro.style.opacity=0.3
        } else {
            bodyCadastro.style.opacity='none'
        }
    }
})