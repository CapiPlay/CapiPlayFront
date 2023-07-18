import React, { useEffect, useState } from 'react'
import './HeaderProfile.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';



function HeaderProfile() {



    return (
        <div className='container__header__profile'>
            <div className='box__header__profile'>
                <AiOutlineArrowLeft className='arrow_icon' color='var(--lightpurple)' fontSize={25} />
                <FiSettings className='settings__icon' color='var(--lightpurple)' fontSize={25} />

            </div>

        </div>

    )
}

export default HeaderProfile