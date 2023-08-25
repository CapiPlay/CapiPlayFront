// styles
import './Modal_profile.css';

// cookies
import Cookies from 'js-cookie';

// react
import Aos from 'aos';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import ThemeToggle from '../theme_toggle/ThemeToggle'

// images
import notFound from '../../../assets/image/404_NotFound.png' 
import channel from '../../../assets/image/channel_profile.png'

function Modal_profile({ profile }) {
    
    const [openModal, setOpenModal] = useState(0)
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    Aos.init({
        duration: 200
    });

    function verify() {
        if (openModal !== 0) {
            return true
        } else {
            return false
        }
    }

    function verifyProfile() {
        if (profile === true) {
            return true
        } else {
            return false
        }
    }

    function verifyProfileImage() {
        if (profile === true) {
            return channel
        } else {
            return notFound
        }
    }

    function Logout() {
        Cookies.remove('token');
        window.location.reload(false);
    }

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

    const renderDesktopView = () => (
        <>
            <div onClick={() => setOpenModal(openModal + 1)}>
                <img src={verifyProfileImage()} className='container__perfilImage' />
            </div>
            {verify() &&
                <div className="background__modal__profile" onClick={() => setOpenModal(openModal - 1)}>
                    {verifyProfile() ? (
                        <div className='modal__profile__container__desktop'>
                            <div className='modal__profile__itens__desktop'>
                                <Link to="/profile" className='text__profile_modal'><p>Seu canal</p></Link>
                                <div className='divider__profile__modal'></div>
                                <div className='text__profile_modal'>
                                    <p>Tema</p>
                                   <ThemeToggle/>
                                </div>
                                <div className='divider__profile__modal'></div>
                                <Link to="/historic" className='text__profile_modal'><p>Histórico</p></Link>
                                <div className='divider__profile__modal'></div>
                                <p onClick={Logout()} className='text__profile_modal'>Sair</p>
                            </div>
                        </div>
                    ) : (
                        <div className='modal__profile__container__desktop'>
                            <div className='modal__profile__itens__desktop'>
                                <Link to="/register" className='text__profile_modal'><p>Acessar Conta</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="/historic" className='text__profile_modal'><p>Histórico</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="/search" className='text__profile_modal'><p>Pesquisar</p></Link>
                                <div className='divider__profile__modal'></div>
                                <div className='text__profile_modal'>
                                    <p>Tema</p>
                                    <ThemeToggle/>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            }
        </>
    );

    const renderTabletView = () => (
        <>
            <div onClick={() => setOpenModal(openModal + 1)}>
                <img src={verifyProfileImage()} className='container__perfilImage' />
            </div>
            {verify() &&
                <div className="background__modal__profile" onClick={() => setOpenModal(openModal - 1)}>
                    {verifyProfile() ? (
                        <div className='modal__profile__container__tablet'>
                            <div className='modal__profile__itens__desktop'>
                                <Link to="/player" className='text__profile_modal'><p>Seu canal</p></Link>
                                <div className='divider__profile__modal'></div>
                                <div className='text__profile_modal_tablet'>
                                    <p>Tema</p>
                                    <ThemeToggle/>
                                </div>
                                <div className='divider__profile__modal'></div>
                                <Link to="" className='text__profile_modal'><p>Histórico</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="" className='text__profile_modal'><p>Sair</p></Link>
                            </div>
                        </div>
                    ) : (
                        <div className='modal__profile__container__tablet'>
                            <div className='modal__profile__itens__desktop'>
                                <Link to="/register" className='text__profile_modal'><p>Fazer Cadastro</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="/historic" className='text__profile_modal'><p>Histórico</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="/search" className='text__profile_modal'><p>Pesquisar</p></Link>
                                <div className='divider__profile__modal'></div>
                                <div className='text__profile_modal_tablet'>
                                    <p>Tema</p>
                                    <ThemeToggle/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }

        </>
    );

    const renderMobileView = () => (
        <>
            <div onClick={() => setOpenModal(openModal + 1)}>
                <img src={verifyProfileImage()} className='container__perfilImage' />
            </div>
            {verify() &&
                <div className="background__modal__profile" onClick={() => setOpenModal(openModal - 1)}>
                    {verifyProfile() ? (
                        <div className='modal__profile__container__mobile'>
                            <div className='modal__profile__itens__desktop'>
                                <Link to="/player" className='text__profile_modal'><p>Seu canal</p></Link>
                                <div className='divider__profile__modal'></div>
                                <div className='text__profile_modal_mobile'>
                                    <p>Tema</p>
                                    <ThemeToggle/>
                                </div>
                                <div className='divider__profile__modal'></div>
                                <Link to="" className='text__profile_modal'><p>Histórico</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="" className='text__profile_modal'><p>Sair</p></Link>
                            </div>
                        </div>
                    ) : (
                        <div className='modal__profile__container__mobile'>
                            <div className='modal__profile__itens__desktop'>
                                <Link to="/register" className='text__profile_modal'><p>Fazer Cadastro</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="/historic" className='text__profile_modal'><p>Histórico</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="/search" className='text__profile_modal'><p>Pesquisar</p></Link>
                                <div className='divider__profile__modal'></div>
                                <div className='text__profile_modal_mobile'>
                                    <p>Tema</p>
                                    <ThemeToggle/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        </>
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

    return <>{
        getViewToRender()
    }</>;
}

export default Modal_profile