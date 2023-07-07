import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
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

import './Modal_menu.css'
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
                        <div classname='modal__category__title' >
                            <h2>Categorias</h2>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Viagem e Turismo</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
                        </div>
                        <div classname='modal__category__item' >
                            <img src={flightsmode} />
                            <p>Categorias</p>
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