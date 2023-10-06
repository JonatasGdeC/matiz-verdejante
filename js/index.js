// index.js (como um módulo ESM)
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselSlide = document.querySelector('.carousel-inner');

let currentIndex = 0;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    updateSlide();
}

function updateSlide() {
    const offset = -currentIndex * 100;
    carouselSlide.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 3000);

// Exportando funções ou variáveis, se necessário
export { currentIndex, nextSlide, updateSlide };
