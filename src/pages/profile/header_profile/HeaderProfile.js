import React from 'react'
import { Link } from 'react-router-dom';
import './HeaderProfile.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';



function HeaderProfile() {



    return (
        <div className='container__header__profile'>
            <div className='box__header__profile'>
                <Link to={"/"}>
                    <AiOutlineArrowLeft className='arrow_icon' color='var(--lightpurple)' fontSize={25} />
                </Link>
                <Link to={"/settings"}>
                    <FiSettings className='settings__icon' color='var(--lightpurple)' fontSize={25} />
                </Link>

            </div>

        </div>

    )
}

export default HeaderProfile