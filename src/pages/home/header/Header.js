import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import './Header.css'
import { Button } from 'bootstrap';

function Header() {
  return (
    <div className='container__header'>
      <div className='box__header'>
        <GiHamburgerMenu className='menu__icon' color='var(--lightpurple)' fontSize={35}>
          <Button></Button>
        </GiHamburgerMenu>
        <div className='container__logo'></div>
      </div>
      <div className='box__header'>
        <AiOutlineSearch className='menu__icon' color='var(--lightpurple)' fontSize={35}>
          <Button></Button>
        </AiOutlineSearch>
        <img src="https://inte.upc.edu/en/shared/img/pingu.jpeg/@@images/898e6d56-4779-44f8-904b-8c1878a7a264.jpeg" className='container__perfilImage'/>
      </div>
    </div>
  )
}

export default Header