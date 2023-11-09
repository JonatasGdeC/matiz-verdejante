$('#preco').mask("#.##0,00", {reverse: true})
$('#cep').mask('00000-000')


const createSpan = document.createElement('span')
const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //Regra de existência de caracteres especiais

const nome = document.getElementById('nome')
const marca = document.getElementById('marca')
const categoria = document.getElementById('categoria')
const genero = document.getElementById('genero')
const descricao = document.getElementById('descricao')

var nomeCorreto = nome.addEventListener('keyup',()=>{
    if(regex.test(nome.value)){
        createSpan.textContent='Não escreva caracteres especiais!'
        nome.insertAdjacentElement('afterend', createSpan)
    } else if (nome.value.length < 3){
        createSpan.textContent='É necessário no mínimo 3 caracteres!'
        nome.insertAdjacentElement('afterend', createSpan)
    }else{
        createSpan.remove()
    }
})

marca.addEventListener('focusout', ()=>{
    if(marca.value == ''){
        createSpan.textContent='Adicione a marca do produto!'
        marca.insertAdjacentElement('afterend', createSpan)
    } else{
        createSpan.remove()
    }
})

categoria.addEventListener('focusout', ()=>{
    if(categoria.value == ''){
        createSpan.textContent='Adicione a categoria do produto!'
        categoria.insertAdjacentElement('afterend', createSpan)
    } else{
        createSpan.remove()
    }
})

genero.addEventListener('focusout', ()=>{
    if(genero.value == ''){
        createSpan.textContent='Adicione o gênero do produto!'
        genero.insertAdjacentElement('afterend', createSpan)
    } else{
        createSpan.remove()
    }
})