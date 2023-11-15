const header = document.getElementById("headerProdutos");
const btnOpenFiltro = document.getElementById("btnOpenFiltro");
const btnCloseFiltro = document.getElementById("btnCloseFiltro");
const filtro = document.getElementById("filtro");
const produtos = document.getElementById("produtos");
const modal = document.getElementById("modal");
const btnCloseModal = document.getElementById("close-modal");
const botaoVoltar = document.getElementById("btn-voltar");

localStorage.setItem("index", window.location.href);


//Carrossel principal contendos os diversos produtos
$(".list-produtos").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        },
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
    ],
});

//Carrossel secundário contendo as imagens dos produtos após abrir o "modal"
$(".img-produto").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
});

btnOpenFiltro.addEventListener('click', ()=>{
    filtro.style.display='block'
})

btnCloseFiltro.addEventListener('click', ()=>{
    filtro.style.display='none'
})

//Habilita a visualização do "modal"
function verMais(){
    header.style.display='none'
    produtos.style.display='none'
    modal.style.display='block'
}

//Veirifica se usuário está logado para compra
//Caso a última tela de acesso seja a 'index.html' é considerado que usuário não esteja logado no sistema
function estaLogadoParaComprar() {
    const paginaAnterior = document.referrer;
    if (
        paginaAnterior == "https://matiz-verdejante.vercel.app/pages/homeUsers.html" ||
        /*Apenas para desenvolvimento -->*/ paginaAnterior == "http://127.0.0.1:5500/pages/homeUsers.html" || 
        paginaAnterior == "https://matiz-verdejante.vercel.app/pages/compra.html" ||
        /*Apenas para desenvolvimento -->*/ paginaAnterior == "http://127.0.0.1:5500/pages/compra.html"
    ) {
        window.location = "compra.html"
    } else {
        window.location = "login.html";
    }
}

//Evento de fechar o "modal"
btnCloseModal.addEventListener('click', ()=>{
    header.style.display='flex'
    produtos.style.display='block'
    modal.style.display='none'
})

//Funcionalidade do botão voltar
botaoVoltar.addEventListener('click',()=>{
    const paginaAnterior = document.referrer;
    window.location=(paginaAnterior)
})