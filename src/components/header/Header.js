import React from 'react'
import {TbUpload} from 'react-icons/tb'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Header.css'

function Header() {
  return (
    <div className='header__container'>
        <div className='header__menu__icon'>
            <GiHamburgerMenu size={'1.5rem'}/>
        </div>
        <div className='header__input__container'>
            <input className='header__input'/>
        </div>
        <div className='header__info'>
            <div>
                <TbUpload size={'1.5rem'}/>
            </div>
            <div>
                <img src='https://yt3.ggpht.com/PFRD_rpPwAIY-FC2t6Ob0GpJe2udeEaXNwug4Dx8v7zxxda6ZKHU1aKBX-XoWvYh2H4Ow6TtBDk=s176-c-k-c0x00ffffff-no-rj-mo' className='user__image'/>
            </div>
        </div>
    </div>
  )
}

export default Header