//Verificação do campo de CEP
cep.addEventListener('focusout', ()=>{
    if(cep.value == '' || cep.value.length < 9){
        createSpan.textContent='Preencha este campo corretamente!'
        cep.insertAdjacentElement('afterend', createSpan)
        endereco.value = ''
        cidade.value = ''
        estado.value = ''
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
    }
})

descricao.addEventListener('focusout', ()=>{
    if(descricao.value = '' || descricao.value.length < 50){
        createSpan.textContent='Escreva no mínimo 50 caracteres!'
        descricao.insertAdjacentElement('afterend', createSpan)
    } else {
        createSpan.remove()
    }
})