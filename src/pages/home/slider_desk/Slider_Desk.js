import React from 'react';
import './Slider_Desk.css';
import Slider from 'react-slick';

const MySlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7]; // Números para exibir nos slides

  return (
    <Slider {...settings}>
      {numbers.map((number, index) => (
        <div  key={number}>
          <h3 className={index === number ? 'container__banner__large__desk' : 'container__banner__desk'} ></h3>
        </div>
      ))}
    </Slider>
  );
};

export default MySlider;
