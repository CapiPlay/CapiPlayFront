import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import "./Modal_menu.css"
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
import Aos from 'aos';

function Modal_menu() {
    const [openModal, setOpenModal] = useState(0)

    function verify() {
        if (openModal !== 0) {
            return true
        } else {
            return false
        }
    }

    return (
        <>
            <div>
                <GiHamburgerMenu className="MenuIcon" onClick={() => setOpenModal(openModal + 1)}></GiHamburgerMenu>
            </div>
            {verify() &&
                <div>
                    <div className='modal__category__content'>
                        <div className='icon__close__content'>
                            <AiOutlineClose className="close__icon" onClick={() => setOpenModal(openModal - 1)}></AiOutlineClose>
                        </div>
                        <div className='modal__category__title' >
                            <p>Categorias</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={art} />
                            </div>
                            <p>Artes e Cultura</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={science} />
                            </div>
                            <p>Ciências e Tecnologia</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={oven_gen} />
                            </div>  
                            <p>Culinária</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={school} />
                            </div>
                            <p>Educação</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={interactive_space} />
                            </div>
                            <p>Entreterimento</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={kayaking} />
                            </div>
                            <p>Esportes</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={video_file} />
                            </div>
                            <p>Documentários</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={sports_esports} />
                            </div>
                            <p>Jogos</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={psychiatry} />
                            </div>
                            <p>Life Style</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={styler} />
                            </div>
                            <p>Moda e Beleza</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={music_note} />
                            </div>
                            <p>Música</p>
                        </div>
                        <div className='modal__category__item' >
                            <div className='icon__category__area'>
                                <img className='icon__category' src={flightsmode} />
                            </div>
                            <p>Viagem e Turismo</p>
                        </div>
                    </div>
                </div>
            }
            {verify() &&
                <div className="background" onClick={() => setOpenModal(openModal - 1)}></div>
            }
        </>
    )
}

export default Modal_menu