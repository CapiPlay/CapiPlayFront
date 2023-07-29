import React, { useEffect, useState } from 'react';
import Modal_menu from '../../pages/home/modal_menu/modal_menu';
import { TbUpload } from 'react-icons/tb'
import logo from '../../assets/image/Logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import './Header.css'
import Modal_profile from './modal_profile/Modal_profile';


function Header() {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderMobileView = () => (
        <div className='container__header'>
            <div className='box__header'>
                <div className='modal__menu' >
                    <Modal_menu />
                </div>
                <div className='container__logo'>
                    <img src={logo} className='container__logo' />
                </div>
            </div>
            <div className='box__header'>
                <AiOutlineSearch className='menu__icon' color='var(--lightpurple)' fontSize={25} />
                <Modal_profile />
            </div>
        </div>
    );

    const renderDesktopView = () => (
        <div className='header__container'>
            <div></div>
            <div className='header__input__container'>
                <input className='header__input__text__search' placeholder='Pesquisar' />
                <AiOutlineSearch />
            </div>
            <div className='header__info'>
                <div>
                    <TbUpload />
                </div>
                <div>
                    <Modal_profile />
                </div>
            </div>
        </div>
    );

    const renderTabletView = () => (
        <div className='container__header'>
            <div className='box__header'>
                <div className='modal__menu'>
                    <Modal_menu />
                </div>
            </div>
            <div className='box__header'>
                <AiOutlineSearch className='menu__icon' color='var(--lightpurple)' fontSize={25} />
                <Modal_profile />
            </div>
        </div>
    );

    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
        } else if (screenSize.width < 900 && screenSize.width > 500) {
            return renderTabletView();
        } else {
            return renderMobileView();
        }
    };

    return <>{getViewToRender()}</>;

}

export default Header