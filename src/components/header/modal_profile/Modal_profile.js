import Aos from 'aos';
import './Modal_profile.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
        if (profile) {
            return true
        } else {
            return false
        }
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
                <img onClick={() => setOpenModal(openModal + 1)} src="https://inte.upc.edu/en/shared/img/pingu.jpeg/@@images/898e6d56-4779-44f8-904b-8c1878a7a264.jpeg" className='container__perfilImage' />
            </div>
            {verify() &&
                <div className="background__modal__profile" onClick={() => setOpenModal(openModal - 1)}>
                    {verifyProfile() ? (
                        <div className='modal__profile__container__desktop'>
                            <div className='modal__profile__itens__desktop'>
                                <Link to="/profile" className='text__profile_modal'><p>Seu canal</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="" className='text__profile_modal'><p >Tema</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="/historic" className='text__profile_modal'><p>Histórico</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="" className='text__profile_modal'><p>Sair</p></Link>
                            </div>
                        </div>
                    ) : (
                        <div className='modal__profile__container__desktop'>
                            <div className='modal__profile__itens__desktop'>
                                <Link to="/register" className='text__profile_modal'><p>Fazer Cadastro</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="/historic" className='text__profile_modal'><p>Histórico</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="/search" className='text__profile_modal'><p>Pesquisar</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="" className='text__profile_modal'><p>Tema</p></Link>
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
                <img src="https://inte.upc.edu/en/shared/img/pingu.jpeg/@@images/898e6d56-4779-44f8-904b-8c1878a7a264.jpeg" className='container__perfilImage' />
            </div>
            {verify() &&
                <div className="background__modal__profile" onClick={() => setOpenModal(openModal - 1)}>
                    {verifyProfile() ? (
                        <div className='modal__profile__container__tablet'>
                            <div className='modal__profile__itens__desktop'>
                                <Link to="/player" className='text__profile_modal'><p>Seu canal</p></Link>
                                <div className='divider__profile__modal'></div>
                                <p>Tema</p>
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
                                <Link to="" className='text__profile_modal'><p>Tema</p></Link>
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
                <img src="https://inte.upc.edu/en/shared/img/pingu.jpeg/@@images/898e6d56-4779-44f8-904b-8c1878a7a264.jpeg" className='container__perfilImage' />
            </div>
            {verify() &&
                <div className="background__modal__profile" onClick={() => setOpenModal(openModal - 1)}>
                    {verifyProfile() ? (
                        <div className='modal__profile__container__mobile'>
                            <div className='modal__profile__itens__desktop'>
                                <Link to="/player" className='text__profile_modal'><p>Seu canal</p></Link>
                                <div className='divider__profile__modal'></div>
                                <Link to="" className='text__profile_modal'><p>Tema</p></Link>
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
                                <Link to="" className='text__profile_modal'><p>Tema</p></Link>
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