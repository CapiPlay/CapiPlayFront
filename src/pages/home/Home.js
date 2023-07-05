import React from 'react'
import Header from './header/Header'
import './Home.css'
import MySlider from './slider/Slider'

function Home() {
  return (
    <><Header />
      <div className='container__home'>
        <div className='container__slider__base'>
          <MySlider />
        </div>
      </div>
    </>

  )
}

export default Home