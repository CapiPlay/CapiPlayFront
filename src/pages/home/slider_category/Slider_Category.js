import React, { useEffect, useState } from 'react'
import './Slider_Category.css'
import Slider from 'react-slick';

function Slider_Category() {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const settingsDesk = {
    slidesToShow: 5,
    slidesToScroll: 3,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 3,
          swipeToSlide: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 3,
          swipeToSlide: true,
          arrows: false,
        }
      }
    ]
  };

  const settingsTablet = {
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

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const numbers = [1, 2, 3, 4, 5, 6, 7]; // Números para exibir nos slides

  const renderDesktopView = () => (
    <Slider {...settingsDesk}>
      {numbers.map((number, index) => (
        <div key={number}>
          <h3 className={index === number ? 'container__banner__large__category' : 'container__banner__category'} ></h3>
        </div>
      ))}
    </Slider>
  );

  const renderTabletView = () => (
    <Slider {...settingsTablet}>
      {numbers.map((number, index) => (
        <div key={number}>
          <h3 className={index === number ? 'container__banner__large__category__tablet' : 'container__banner__category__tablet'} ></h3>
        </div>
      ))}
    </Slider>
  );


  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    } else {
      return null;
    }
  };

  return <>{getViewToRender()}</>;

};

export default Slider_Category