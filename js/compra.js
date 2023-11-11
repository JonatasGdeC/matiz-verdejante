const botaoVoltar = document.getElementById("btn-voltar");

//Funcionalidade do botão voltar
botaoVoltar.addEventListener("click", () => {
  const paginaAnterior = document.referrer;
  window.location = paginaAnterior;
});

$(".carrossel").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});
