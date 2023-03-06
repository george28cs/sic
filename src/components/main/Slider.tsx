import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/slider.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}  className="slider-wrapper">
      <div>
        <img className='slider-img' src={img1} alt="Slide 1" />
      </div>
      <div>
        <img className='slider-img' src={img2} alt="Slide 2" />
      </div>
    </Slider>
  );
};

export default SliderComponent;