import React, { useEffect, useState } from 'react'
import './Side_Bar.css'
import art from '../../../assets/image/palette.png'
import science from '../../../assets/image/science.png'
import school from '../../../assets/image/school.png'
import interactive_space from '../../../assets/image/interactive_space.png'
import flightsmode from '../../../assets/image/flightsmode.png'
import video_file from '../../../assets/image/video_file.png'
import kayaking from '../../../assets/image/kayaking.png'
import oven_gen from '../../../assets/image/oven_gen.png'
import sports_esports from '../../../assets/image/sports_esports.png'
import psychiatry from '../../../assets/image/psychiatry.png'
import music_note from '../../../assets/image/music_note.png'
import styler from '../../../assets/image/styler.png'
import { GiHamburgerMenu } from 'react-icons/gi';

function Side_Bar() {

    const [openModal, setOpenModal] = useState(0)
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    const closeSideBar = () => {
        setIsSideBarOpen(false);
    };

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

    const verifyScreen = () => {
        if (screenSize.width < 500) {
            return false
        } else {
            return true
        }
    }

    return (
        <>
            {verifyScreen() ?
                <div className={`container__side__bar ${isSideBarOpen ? 'openModal__side' : ''}`}>
                    <div className={`category__box ${isSideBarOpen ? 'openBoxes__side' : ''}`}>
                        <div className='modal__category__item__side' >
                            <GiHamburgerMenu color='var(--lightpurple)' onClick={handleSideBar} size={'2rem'} className='icon__hamburguer__side'/>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={art} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Artes e cultura</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={science} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Ciências e tecnologia</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={oven_gen} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Culinária</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={school} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Educação</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={interactive_space} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Esportes</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={kayaking} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Entretenimento</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={video_file} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Documentário</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={sports_esports} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Jogos</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={psychiatry} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Lifestyle</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={styler} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Moda e beleza</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={music_note} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Música</p>
                            </div>
                        </div>
                        <div className='modal__category__item__side' >
                            <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                <img className='icon__category__side' src={flightsmode} />
                                <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Viagem e turismo</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='container__side__bar'>

                </div>
            }
        </>
    )
}

export default Side_Bar