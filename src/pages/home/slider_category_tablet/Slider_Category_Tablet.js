import React from 'react'
import './Slider_Category_Tablet.css'
import Slider from 'react-slick';

function Slider_Category_Tablet() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
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
              <h3 className={index === number ? 'container__banner__large__category__tablet' : 'container__banner__category__tablet'} ></h3>
            </div>
          ))}
        </Slider>
      );
}

export default Slider_Category_Tablet