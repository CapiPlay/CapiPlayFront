import React from 'react'
import { TbUpload } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineSearch } from 'react-icons/ai'
import './Header.css'

function Header() {
    return (
        <div className='header__container'>
            <div className='header__menu__icon'>
                <GiHamburgerMenu />
            </div>
            <div className='header__input__container'>
                <input placeholder='Pesquisar' />
                <AiOutlineSearch />
            </div>
            <div className='header__info'>
                <div>
                    <TbUpload />
                </div>
                <div>
                    <img src='https://yt3.ggpht.com/PFRD_rpPwAIY-FC2t6Ob0GpJe2udeEaXNwug4Dx8v7zxxda6ZKHU1aKBX-XoWvYh2H4Ow6TtBDk=s176-c-k-c0x00ffffff-no-rj-mo'/>
                </div>
            </div>
        </div>
    )
}

export default Header