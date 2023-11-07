const createSpan = document.createElement('span')
const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //Regra de existência de caracteres especiais

const nome = document.getElementById('nome')

nome.addEventListener('keyup',()=>{
    if(regex.test(nome.value)){
        createSpan.textContent='Não escreva caracteres especiais!'
        nome.insertAdjacentElement('afterend', createSpan)
    } else{
        createSpan.remove()
    }
})