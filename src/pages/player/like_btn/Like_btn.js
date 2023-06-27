import React from 'react'
import './Like_btn.css'
import { BiLike } from 'react-icons/bi'

function Like_btn() {
  return (
    <div>
      <button className='like__btn'><BiLike size={'1.6rem'}/></button>
    </div>
  )
}

export default Like_btn