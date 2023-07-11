import React, { useEffect, useState } from 'react'
import Header from './header/Header'
import HeaderDesk from '../../components/header/Header'
import './Home.css'
import MySlider from './slider/Slider'
import DeskSlider from './slider_desk/Slider_Desk'
import Video_card from '../../components/video_card/Video_card'
import Side_Bar from './side_bar/Side_Bar'

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

  const verifyScreen = () => {
    if (screenSize.width > 900) {
      return false
    } else {
      return true
    }
  }

  return (
    <> 
      {verifyScreen() ?
      <><Header /><div className='container__home'>
          <div className='container__slider__base'>
            <MySlider />
          </div>
          <div className='container__video__cards'>
            <Video_card />
            <Video_card />
          </div>
        </div></>
        :
        <><HeaderDesk /><Side_Bar/> <div className='container__home'>
          <div className='container__slider__base'>
            <DeskSlider />
          </div>
          <div className='container__video__cards'>
            <Video_card />
            <Video_card />
          </div>
        </div></>
      }
    </>

  )
}

export default Home