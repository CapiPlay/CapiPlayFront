import React from 'react';
import './Slider.css';
import Slider from 'react-slick';

const MySlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
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
          <h3 className={index === number ? 'container__banner__large' : 'container__banner'} ></h3>
        </div>
      ))}
    </Slider>
  );
};

export default MySlider;
