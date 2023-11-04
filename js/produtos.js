const btnFiltro = document.getElementById('btn-filtro')
const filtro = document.getElementById('filtro')

localStorage.setItem('index', window.location.href)

btnFiltro.addEventListener('click',()=>{
    filtro.classList.toggle('filtro-aberto')
})

$('.list-produtos').slick({
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
        dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }
    ]
});

function estaLogado(){
    const paginaAnterior = document.referrer;
    if(paginaAnterior == 'https://matiz-verdejante.vercel.app/index.html'){
        window.location=('./login.html')
    } else{
        alert('Falta criar página de compra!!!')
    }
}