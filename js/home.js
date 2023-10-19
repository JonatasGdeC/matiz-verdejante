$('.carrossel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
});

AOS.init();

const btnHamburguer = document.getElementById('menu-hamburguer')
const links = document.getElementById('header-links')
const btnCloseMenu = document.getElementById('btn-close')

btnHamburguer.addEventListener('click', ()=>{
    btnHamburguer.style.display='none'
    btnCloseMenu.style.display='block'
    links.style.display='block'
})

btnCloseMenu.addEventListener('click', ()=>{
    btnHamburguer.style.display='block'
    links.style.display='none'
    btnCloseMenu.style.display='none'
})