// styles
import './Modal_profile.css'

// cookies
import Cookies from 'js-cookie'

// react
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ThemeToggle from '../theme_toggle/ThemeToggle'

const Modal_profile = () => {

    function Logout() {
        window.location.reload(false)
        Cookies.remove('token')
        Cookies.remove('user')
    }

    return (
        <div className='modal__profile__container'>
            {/* {
                isLoged ? (
                    <Link to="/profile"><p>Seu canal</p></Link>
                ) : (
                    <Link to="/login"><p>Acessar Conta</p></Link>
                )
            } */}
            <div className='divider__profile__modal' />
            <div id='change__theme'>
                <p>Tema</p>
                <ThemeToggle />
            </div>
            <div className='divider__profile__modal'></div>
            <Link to="/historic" ><p>Histórico</p></Link>
            <div className='divider__profile__modal'></div>
            <Link to="/settings" ><p>Settings</p></Link>
            <div className='divider__profile__modal'></div>
            <p onClick={Logout}>Sair</p>
        </div>
    )
}
export default Modal_profile