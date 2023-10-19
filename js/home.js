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

btnHamburguer.addEventListener('click', ()=>{
    links.classList.toggle('links-visiveis')
})