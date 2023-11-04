$('.list-produtos').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 2
        }
    }
    ]
});