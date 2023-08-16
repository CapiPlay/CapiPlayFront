import React, { useEffect, useState } from 'react'
import notFound from '../../assets/image/404_NotFound.png'
import './NotFound.css'
import { Link } from 'react-router-dom';

function NotFound() {

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

    const renderDesktopView = () => (
        <>
            <div className='not__found__image__container'>
                <div className='not__found__image__box'>
                    <p className='not__found__number'><span><b>404</b></span></p>
                    <div className='not__found__text__box'>
                        <p className='not__found__text'>Página Não Encontrada</p>
                        <p className='not__found__subtext'>Voltar para <b className='home__not__found'><Link to="/" className='home__not__found'>Home</Link></b></p>
                    </div>
                </div>
                <img className='not__found__image' src={notFound} alt="404" />
            </div>
        </>
    );

    const renderTabletView = () => (
        <>
            <div className='not__found__image__container'>
                <div className='not__found__image__box'>
                    <p className='not__found__number'><span><b>404</b></span></p>
                    <div className='not__found__text__box'>
                        <p className='not__found__text'>Página Não Encontrada</p>
                        <p className='not__found__subtext'>Voltar para <b className='home__not__found'><Link to="/" className='home__not__found'>Home</Link></b></p>
                    </div>
                </div>
                <img className='not__found__image__tablet' src={notFound} alt="404" />
            </div>
        </>
    );

    const renderMobileView = () => (
        <>
            <div className='not__found__image__container'>
                <div className='not__found__image__box__mobile'>
                    <p className='not__found__number'><span><b>404</b></span></p>
                    <div className='not__found__text__box'>
                        <p className='not__found__text'>Página Não Encontrada</p>
                        <p className='not__found__subtext'>Voltar para <b className='home__not__found'><Link to="/" className='home__not__found'>Home</Link></b></p>
                    </div>
                </div>
                <img className='not__found__image__mobile' src={notFound} alt="404" />
            </div>
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

    return <>{getViewToRender()}</>;

}

export default NotFound