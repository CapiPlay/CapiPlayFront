import React, { useEffect, useState } from 'react'
import notFound from '../../assets/image/404_NotFound.png'
import NotFoundGif from '../../assets/image/404_NotFound_gif.gif'
import './NotFound.css'

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
                    <p className='not__found__text'>Página Não Encontrada</p>
                    <p className='not__found__subtext'>Voltar para <b>Home</b></p>
                </div>
                <img className='not__found__image' src={notFound} alt="404" />
            </div>
        </>
    );

    const renderTabletView = () => (
        <>
            <div>

            </div>
        </>
    );

    const renderMobileView = () => (
        <>
            <div>

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