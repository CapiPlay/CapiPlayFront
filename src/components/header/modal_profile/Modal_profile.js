// styles
import './Modal_profile.css'

// cookies
import Cookies from 'js-cookie'

// react
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ThemeToggle from '../theme_toggle/ThemeToggle'

const Modal_profile = ({ isOpen }) => {

    const nav = useNavigate();

    function Logout() {
        Cookies.remove('token')
        Cookies.remove('user')
        nav('/')
        window.location.reload()
    }

    const userExist = Cookies.get("token")

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.modal__profile__container') && !e.target.closest('#image__profile')) {
                isOpen()
            }
        }

        const handleResize = () => {
            isOpen()
        }

        document.addEventListener('click', handleClickOutside)
        window.addEventListener('resize', handleResize)

        return () => {
            document.removeEventListener('click', handleClickOutside)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='modal__profile__container'>
            {
                userExist ? (
                    <Link to="/profile"><p>Seu canal</p></Link>
                ) : (
                    <Link to="/login"><p>Acessar Conta</p></Link>
                )
            }
            <div className='divider__profile__modal' />
            <div id='change__theme'>
                <p>Tema</p>
                <ThemeToggle />
            </div>
            <div className='divider__profile__modal'></div>
            <Link to="/historic" ><p>Histórico</p></Link>
            {
                userExist ? (
                    <><div className='divider__profile__modal'></div>
                        <Link to="/settings"><p>Configuração</p></Link></>
                ) : (
                    <></>
                )
            }
            <div className='divider__profile__modal'></div>
            <p onClick={Logout}>Sair</p>
        </div >
    )
}
export default Modal_profile