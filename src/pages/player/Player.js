import React from 'react'
import Like from './like_btn/Like_btn'
import Dislike from './dislike_btn/Dislike_btn'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import pingu from '../../assets/image/pingu.mp4'
import './Player.css'
import Channel_component from './channel_component/Channel_component'

function Player() {
  return (
    <>
      <div>
        <video  controls className='video__player'>
        <source src={pingu} type="video/mp4"/>
        </video>
      </div>
      <div className='video__title'>
        <p>Pingu.</p>
      </div>
      <div className='interaction'>
        <div className='interaction__info'>
          <div className='views__div'>
            <AiFillEye size={'1.3rem'} /> 57k de Visualizações
          </div>
          <div className='likes__div'>
            <AiFillHeart size={'1.25rem'} /> 57k de Likes
          </div>
        </div>
        <div className='like__dislike__btns'>
          <Like />
          <Dislike />
        </div>
      </div>
      <div>
        <Channel_component/>
     </div>
    </>
  )
}

export default Player