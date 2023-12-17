import imgCarrossel1 from '../../images/carrossel-home/image1.png'
import imgCarrossel2 from '../../images/carrossel-home/image2.png'
import imgCarrossel3 from '../../images/carrossel-home/image3.png'
import imgCarrossel4 from '../../images/carrossel-home/image4.png'
import imgCarrossel5 from '../../images/carrossel-home/image5.png'
import imgCarrossel6 from '../../images/carrossel-home/image6.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrossel = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    };
    return (
        <Slider {...settings}>
            <img src={imgCarrossel1} alt="" />
            <img src={imgCarrossel2} alt="" />
            <img src={imgCarrossel3} alt="" />
            <img src={imgCarrossel4} alt="" />
            <img src={imgCarrossel5} alt="" />
            <img src={imgCarrossel6} alt="" />
        </Slider>
    );
};

export default Carrossel;