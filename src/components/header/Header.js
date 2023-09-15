import './Header.css'

// componentes
import Search from '../../pages/searchMobile/Search'
import Modal_profile from './modal_profile/Modal_profile'

// ícones
import { TbUpload } from 'react-icons/tb'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMenu } from 'react-icons/io5'

// hooks
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// imagens
import notFound from '../../assets/image/404_NotFound.png'

// redux
import { useDispatch } from 'react-redux'
import { doIsClicked } from "../../store/features/header/headerSlice"

// service
import UsuarioEngajamentoService from '../../service/Engajamento/UsuarioEngajamentoService'

const Header = ({ searchValue }) => {

    const nav = useNavigate()
    const location = useLocation()

    const [search, setSearch] = useState(false)
    const [searchDesktop, setSearchDesktop] = useState(false)
    const [verifyClicked, setVerifyClicked] = useState(false)
    const [valueInput, setValueInput] = useState(searchValue)
    const [openModalProfile, setOpenModalProfile] = useState(false)

    const [image, setImage] = useState(notFound)
    const [usuario, setUsuario] = useState({})

    const dispatch = useDispatch()

    const handleClick = () => {
        setSearch(!search)
    }

    const handleSearch = () => {
        nav(`/result-search?search=${encodeURIComponent(valueInput)}`)
        console.log("search: ")
    }

    const verifyKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    const handleChange = (e) => {
        setValueInput(e.target.value)
    }

    useEffect(() => {
        if (valueInput === null) {
            const urlSearchParams = new URLSearchParams(location.search)
            const searchParams = urlSearchParams.get("q")
            setValueInput(searchParams)
        }

        if (verifyClicked) {
            setSearchDesktop(true)
        } else {
            setSearchDesktop(false)
        }
    }, [])

    const handleSelection = (searchSelected) => {
        setValueInput(searchSelected)
        setVerifyClicked(true)
        nav(`/result-search?search=${searchSelected}`)
    }

    // const handleClick = (e) => {
    //     const element = e.target.offsetParent
    //     if (element == null || !element.classList.contains("header__input__container")) {
    //         setSearchDesktop(false)
    //     }
    // }



    const handleOpenModalProfile = () => {
        setOpenModalProfile(!openModalProfile)
    }

    const handleOpenSideBar = async () => {
        dispatch(doIsClicked())
    }

    useEffect(() => {
        UsuarioEngajamentoService.buscarUm()
            .then((data) => {
                if (data && data.foto) {
                    setImage("http://10.4.96.50:7000/api/usuario/static/" + data.foto)
                } else {
                    setImage(notFound)
                }
                setUsuario(data)
            })
            .catch((error) => {
                console.error('Erro ao buscar usuario: ', error)
            })
    }, [])

    return (
        <div className='header__container'>
            <div className='header__menu__icon'>
                <IoMenu onClick={handleOpenSideBar} />
            </div>
            <div className='header__input__container'>
                <div>
                    <input
                        className='header__input__text__search'
                        placeholder='Pesquisar'
                        onFocus={() => setSearchDesktop(true)}
                        value={valueInput}
                        onKeyPress={verifyKeyPress}
                        onChange={handleChange} />
                    <AiOutlineSearch />
                </div>
                {
                    searchDesktop &&
                    <Search />
                }
            </div>
            <div className='header__info'>
                <div className='info__from__header'>
                    {/* {
                        verifyToken() &&
                        <Link to="/upload" className='upload__icon__header'><TbUpload /></Link>
                    } */}
                    <TbUpload />
                </div>
                <div className='info__from__header'>
                    <img src={image} onClick={handleOpenModalProfile} />
                </div>
                {
                    openModalProfile &&
                    <Modal_profile />
                }
            </div>
        </div>
    )
}

export default Header