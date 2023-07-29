import Aos from 'aos';
import React, { useEffect, useState } from 'react'

function Modal_profile() {
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
            <div>
                <img onClick={() => setOpenModal(openModal - 1)} src="https://inte.upc.edu/en/shared/img/pingu.jpeg/@@images/898e6d56-4779-44f8-904b-8c1878a7a264.jpeg" className='container__perfilImage' />
            </div>
            {verify() &&
                <div className='modal__profile__container'>

                </div>
            }
        </>
    );

    const renderTabletView = () => (
        <>
            <div onClick={() => setOpenModal(openModal - 1)}>
                <img src="https://inte.upc.edu/en/shared/img/pingu.jpeg/@@images/898e6d56-4779-44f8-904b-8c1878a7a264.jpeg" className='container__perfilImage' />
            </div>
            {verify() &&
                <div className='modal__profile__container'>
                    
                </div>
            }

        </>
    );

    const renderMobileView = () => (
        <>
            <div onClick={() => setOpenModal(openModal - 1)}>
                <img src="https://inte.upc.edu/en/shared/img/pingu.jpeg/@@images/898e6d56-4779-44f8-904b-8c1878a7a264.jpeg" className='container__perfilImage' />
            </div>
            {verify() &&
                <div className='modal__profile__container'>

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

    return <>{getViewToRender()}</>;
}

export default Modal_profile