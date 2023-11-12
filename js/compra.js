const btnVoltar = document.getElementById('btn-voltar');
const formEntrega = document.getElementById('formEntrega');
const btnProximo = document.getElementById('btn-form-entrega');

btnVoltar.addEventListener('click', ()=>{
    window.location = "produtos.html"
})

btnProximo.addEventListener('click', ()=>{
    formEntrega.style.display='none'
})