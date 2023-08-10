import React from 'react'
import './Dislike_btn.css'
import { BiDislike } from 'react-icons/bi'

function Dislike_btn() {
  return (
    <div>
      <button className='dislike__btn'><BiDislike size={'1.6rem'}/></button>
    </div>
  )
}

export default Dislike_btn