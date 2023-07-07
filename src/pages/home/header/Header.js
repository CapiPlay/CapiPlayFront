import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiUpload } from 'react-icons/fi';
import logo from '../../../assets/image/Logo.png'
import { AiOutlineSearch } from 'react-icons/ai';
import './Header.css'
import Modal_menu from '../modal_menu/Modal_menu';
import Aos from 'aos';

function Header() {

  Aos.init({
    duration: 200
  });

  return (
    <div className='container__header'>
      <div className='box__header'>
        <div className='modal__menu'>
          <Modal_menu />
        </div>
        <div className='container__logo'>
          <img src={logo} className='container__logo' />
        </div>
      </div>
      <div className='box__header'>
        <AiOutlineSearch className='menu__icon' color='var(--lightpurple)' fontSize={25} />
        <FiUpload className='menu__icon' color='var(--lightpurple)' fontSize={25} />
        <img src="https://inte.upc.edu/en/shared/img/pingu.jpeg/@@images/898e6d56-4779-44f8-904b-8c1878a7a264.jpeg" className='container__perfilImage' />
      </div>
    </div>
  )
}

export default Header