import React from 'react'
import './Channel_component.css'

function Channel_component() {
  return (
    <div>
        <div className='component'>
            <div className='channel'>
                <img src='https://yt3.ggpht.com/PFRD_rpPwAIY-FC2t6Ob0GpJe2udeEaXNwug4Dx8v7zxxda6ZKHU1aKBX-XoWvYh2H4Ow6TtBDk=s176-c-k-c0x00ffffff-no-rj-mo' className='channel__image'/>
            </div>
            <div className='channel__info'>
                <div className='channel__name'>Pingu - OfficialChannel</div>
                <div className='channel__subs'>50 mi de inscritos</div>
            </div>
            <div className='subscribe__btn'>
                <button>inscrever-se</button>
            </div>
        </div>
    </div>
  )
}

export default Channel_component