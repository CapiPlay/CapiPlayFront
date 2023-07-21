
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import './Home.css';
import Slider from './slider/Slider';
import Video_card from '../../components/video_card/Video_card';
import Side_Bar from './side_bar/Side_Bar';
import Slider_Category from './slider_category/Slider_Category';
import Header_Tablet from './header_tablet/Header_Tablet';
import Slider_Shorts from '../../components/slider_shorts/Slider_Shorts';

function Home() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

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

  const renderDesktopView = () => (
    <>
      <Header />
      <Side_Bar />
      <div className='container__home'>
        <div className='container__slider__base__desk'>
          <Slider_Category />
        </div>
        <div className='container__slider__base__desk'>
          <Slider />
        </div>
        <div className='container__video__cards__desk'>
          {Array.from({ length: 6 }, (_, index) => (
            <Video_card key={index} />
          ))}
        </div>
        <div className='container__shorts__cards__desk'>
          <Slider_Shorts />
        </div>
        <div className='container__video__cards__desk'>
          {Array.from({ length: 6 }, (_, index) => (
            <Video_card key={index} />
          ))}
        </div>
      </div>
    </>
  );

  const renderTabletView = () => (
    <>
      <Header />
      <div className='container__home'>
        <div className='container__slider__base__tablet'>
          <Slider_Category />
        </div>
        <div className='container__slider__base__tablet'>
          <Slider />
        </div>
        <div className='container__video__cards__tablet'>
          {Array.from({ length: 4 }, (_, index) => (
            <Video_card key={index} />
          ))}
        </div>
        <div className='container__shorts__cards__tablet'>
          <Slider_Shorts />
        </div>
        <div className='container__video__cards__tablet'>
          {Array.from({ length: 6 }, (_, index) => (
            <Video_card key={index} />
          ))}
        </div>
      </div>
    </>
  );

  const renderMobileView = () => (
    <>
      <Header />
      <div className='container__home'>
        <div className='container__slider__base'>
          <Slider />
        </div>
        <div className='container__video__cards'>
          {Array.from({ length: 2 }, (_, index) => (
            <Video_card key={index} />
          ))}
        </div>
        <div className='container__shorts__cards__mobile'>
          <Slider_Shorts />
        </div>
        <div className='container__video__cards'>
          {Array.from({ length: 2 }, (_, index) => (
            <Video_card key={index} />
          ))}
        </div>
      </div>
    </>
  );

  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    } else {
      return renderMobileView();
    }
  };

  return <>{getViewToRender()}</>;
}

export default Home;
