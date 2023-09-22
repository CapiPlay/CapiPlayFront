// styles
import './Side_Bar.css'

// react
import React, { useEffect, useState } from 'react'

// react icons
import { TbMovie } from 'react-icons/tb';
import { TbPlant } from 'react-icons/tb';
import { SlPlane } from 'react-icons/sl';
import { TbSchool } from 'react-icons/tb';
import { TbHanger2 } from 'react-icons/tb';
import { PiPalette } from 'react-icons/pi';
import { TbChefHat } from 'react-icons/tb';
import { LuGamepad2 } from 'react-icons/lu';
import { PiTelevision } from 'react-icons/pi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineScience } from 'react-icons/md';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { MdOutlineSportsVolleyball } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';

function Side_Bar() {

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
                            <GiHamburgerMenu color='var(--purple)' onClick={handleSideBar} size={'2rem'} className='icon__hamburguer__side' />
                        </div>
                        <Link to='/' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <BiHomeAlt2 color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Home</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/ARTESECULTURA' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <PiPalette color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Artes e cultura</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/CIENCIAETECNOLOGIA' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <MdOutlineScience color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Ciências e tecnologia</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/CULINARIA' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <TbChefHat color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Culinária</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/EDUCACAO' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <TbSchool color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Educação</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/ESPORTES' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <MdOutlineSportsVolleyball color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Esportes</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/ENTRETERIMENTO' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <PiTelevision color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Entretenimento</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/DOCUMENTARIO' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <TbMovie color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Documentário</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/JOGOS' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <LuGamepad2 color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Jogos</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/LIFESTYLE' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <TbPlant color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Lifestyle</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/MODAEBELEZA' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <TbHanger2 color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Moda e beleza</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/MUSICA' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <HiOutlineMusicNote color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Música</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/category/VIAGEMETURISMO' className='modal__category__item__side' >
                            <div className='modal__category__item__side' >
                                <div className={`icon__category__area__side ${isSideBarOpen ? 'openItem__side' : ''}`}>
                                    <SlPlane color='var(--whiteBlack)' size={'2rem'} className='icon__category__side' />
                                    <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Viagem e turismo</p>
                                </div>
                            </div>
                        </Link>
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