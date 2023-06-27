import React from 'react'
import Like from './like_btn/Like_btn'
import Dislike from './dislike_btn/Dislike_btn'
import './Player.css'

function Player() {
  return (
    <>

      <div>

      </div>
      <div>
        <div>

        </div>
        <div>

        </div>
        <div className='like__dislike__btns'>
          <Like />
          <Dislike />
        </div>
      </div>

    </>
  )
}

export default Player