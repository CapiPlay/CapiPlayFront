import React from 'react'
import Header from './header/Header'
import './Home.css'
import MySlider from './slider/Slider'
import Video_card from '../../components/video_card/Video_card'

function Home() {
  return (
    <><Header />
      <div className='container__home'>
        <div className='container__slider__base'>
          <MySlider />
        </div>
        <div className='container__video__cards'>
          <Video_card />
          <Video_card />
        </div>
      </div>
    </>

  )
}

export default Home