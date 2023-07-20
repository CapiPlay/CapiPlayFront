import React, { useEffect, useState } from 'react';
import './Slider.css';
import Slider from 'react-slick';

const MySlider = () => {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const settingsMobile = {
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    arrows: false,
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

  const settingsDesktopMobile = {
    autoplay: true,
    arrows: false,
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


  const renderMobileView = () => (
    <Slider {...settingsMobile}>
      {numbers.map((number, index) => (
        <div key={number}>
          <h3 className={index === number ? 'container__banner__large' : 'container__banner'} ></h3>
        </div>
      ))}
    </Slider>
  );

  const renderTabletDesktopView = () => (
    <Slider {...settingsDesktopMobile}>
      {numbers.map((number, index) => (
        <div  key={number}>
          <h3 className={index === number ? 'container__banner__large__desk' : 'container__banner__desk'} ></h3>
        </div>
      ))}
    </Slider>
  );


  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderTabletDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletDesktopView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;
}

export default MySlider;
