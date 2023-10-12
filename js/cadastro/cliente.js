//Verificação do campo de data de nascimento
var dataCorreta = dataNasc.addEventListener('focusout', ()=>{
    if(dataNasc.value == '' || dataNasc.value.length < 10){
        createSpan.textContent='Este campo é obrigatório!'
        dataNasc.insertAdjacentElement('afterend', createSpan)
        return dataCorreta = false
    } else {
        createSpan.remove()
        return dataCorreta = true
    }
})

//Verificação do campo gênero
var generoSelecionado = genero.addEventListener('focusout', ()=>{
    if(genero.value == ''){
        createSpan.textContent='Selecione seu gênero!'
        genero.insertAdjacentElement('afterend', createSpan)
        return generoSelecionado = false
    } else {
        createSpan.remove()
        return generoSelecionado = true
    }
})

//Validação ao enviar o formulário de cliente
formCliente.addEventListener('submit', (e)=>{
    e.preventDefault()
    if (!nomeCorreto || !sobrenomeCorreto || !emailCorreto || !dataCorreta || !cpfCorreto || !generoSelecionado || !celularCorreto || !senha1Correta || !senha2Correta){
        alert('Preencha todos os campos corretamente!')
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