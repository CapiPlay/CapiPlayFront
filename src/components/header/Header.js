import React, { useEffect, useState } from 'react';
import Modal_menu from '../../pages/home/modal_menu/modal_menu';
import { TbUpload } from 'react-icons/tb'
import logo from '../../assets/image/Logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import './Header.css'


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
                <img src="https://inte.upc.edu/en/shared/img/pingu.jpeg/@@images/898e6d56-4779-44f8-904b-8c1878a7a264.jpeg" className='container__perfilImage' />
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
                    <img src='https://yt3.ggpht.com/PFRD_rpPwAIY-FC2t6Ob0GpJe2udeEaXNwug4Dx8v7zxxda6ZKHU1aKBX-XoWvYh2H4Ow6TtBDk=s176-c-k-c0x00ffffff-no-rj-mo' alt='Imagem de Perfil' />
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
                <img src="https://inte.upc.edu/en/shared/img/pingu.jpeg/@@images/898e6d56-4779-44f8-904b-8c1878a7a264.jpeg" className='container__perfilImage' />
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