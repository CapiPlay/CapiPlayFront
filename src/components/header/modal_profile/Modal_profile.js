// styles
import './Modal_profile.css'

// cookies
import Cookies from 'js-cookie'

// react
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ThemeToggle from '../theme_toggle/ThemeToggle'

// images
import notFound from '../../../assets/image/404_NotFound.png'
import channel from '../../../assets/image/channel_profile.png'

//service
import UsuarioEngajamentoService from '../../../service/Engajamento/UsuarioEngajamentoService'

const Modal_profile = ({ profile }) => {

    const [usuario, setUsuario] = useState({})
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
    const [image, setImage] = useState(notFound)

    function verifyProfile() {
        return profile === true
    }

    function verifyProfileImage() {
        return profile === true ? channel : notFound
    }

    function Logout() {
        window.location.reload(false)
        Cookies.remove('token')
        Cookies.remove('user')
    }

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        UsuarioEngajamentoService.buscarUm()
            .then((data) => {
                setUsuario(data)
                console.log(data)
            })
            .catch((error) => console.error('Erro ao buscar usuario:', error))
    }, [])

    useEffect(() => {
        // if (usuario.foto) {
        //     setImage("http://10.4.96.50:7000/api/usuario/static/" + usuario.foto)
        // }
    }, [usuario])

    return (
        <div className='modal__profile__container'>
            {
                verifyProfile() ? (
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
            <div className='divider__profile__modal'></div>
            <Link to="/settings" ><p>Settings</p></Link>
            <div className='divider__profile__modal'></div>
            <p onClick={Logout}>Sair</p>
        </div>
    )
}
export default Modal_profile