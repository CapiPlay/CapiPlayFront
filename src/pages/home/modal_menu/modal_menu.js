import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
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
                    <div data-aos='fade-right' className="modal-menu-content">
                        <ul className="modal-menu-list">
                            <li className="modal-menu-item">Início</li>
                            <li className="modal-menu-item">Em alta</li>
                            <li className="modal-menu-item">Inscrições</li>
                            <li className="modal-menu-item">Originais</li>
                            <li className="modal-menu-item">Histórico</li>
                        </ul>
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