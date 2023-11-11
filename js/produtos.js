const btnFiltro = document.getElementById("btn-filtro");
const filtro = document.getElementById("filtro");

localStorage.setItem("index", window.location.href);

btnFiltro.addEventListener("click", () => {
    filtro.classList.toggle("filtro-aberto");
});

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

function estaLogadoLogo() {
    const logoSite = document.getElementById("logo-site");
    logoSite.addEventListener("click", () => {
        const paginaAnterior = document.referrer;
        if (
        paginaAnterior == "https://matiz-verdejante.vercel.app/index.html" ||
        /*Apenas para desenvolvimento -->*/ paginaAnterior ==
            "http://127.0.0.1:5500/index.html"
        ) {
        window.location = "../index.html";
        } else {
        window.location = "../pages/homeUsers.html";
        }
    });
}

function estaLogadoMenu() {
    const paginaAnterior = document.referrer;
    if (
        paginaAnterior ==
        "https://matiz-verdejante.vercel.app/pages/homeUsers.html" ||
        /*Apenas para desenvolvimento -->*/ paginaAnterior ==
        "http://127.0.0.1:5500/pages/homeUsers.html"
    ) {
        const btnUser = document.getElementById("btn-user");
        const menuUser = document.getElementById("menu-user");
        const closeMenuUser = document.getElementById("icon-link-secundary");

        btnUser.addEventListener("click", () => {
        menuUser.style.display = "block";
        });
        closeMenuUser.addEventListener("click", () => {
        menuUser.style.display = "none";
        });
    } else {
        window.location = "./pages/login.html";
    }
    }

    function estaLogadoParaComprar() {
    const paginaAnterior = document.referrer;
    if (
        paginaAnterior ==
        "https://matiz-verdejante.vercel.app/pages/homeUsers.html" ||
        /*Apenas para desenvolvimento -->*/ paginaAnterior ==
        "http://127.0.0.1:5500/pages/homeUsers.html"
    ) {
        window.location = "../pages/compra.html";
    } else {
        window.location = "../pages/login.html";
    }
    }

    const btnHamburguer = document.getElementById("menu-hamburguer");
    const links = document.getElementById("header-links");
    const btnCloseMenu = document.getElementById("btn-close");

    btnHamburguer.addEventListener("click", () => {
    btnHamburguer.style.display = "none";
    btnCloseMenu.style.display = "block";
    links.style.display = "block";
});

btnCloseMenu.addEventListener("click", () => {
    btnHamburguer.style.display = "block";
    links.style.display = "none";
    btnCloseMenu.style.display = "none";
});
