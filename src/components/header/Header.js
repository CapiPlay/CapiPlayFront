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
import channel from '../../assets/image/channel_profile.png'

const Header = ({ userLogin, searchValue }) => {

    const location = useLocation()
    const [search, setSearch] = useState(false)
    const [searchDesktop, setSearchDesktop] = useState(false)
    const [verifyClicked, setVerifyClicked] = useState(false)
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
    const nav = useNavigate()
    const [valueInput, setValueInput] = useState(searchValue)

    const [openModalProfile, setOpenModalProfile] = useState(false)

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

    const verifyToken = () => {
        return userLogin === true
    }

    const handleSelection = (searchSelected) => {
        setValueInput(searchSelected)
        setVerifyClicked(true)
        nav(`/result-search?search=${searchSelected}`)
    }

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight })
        }

        function handleClick(e) {
            const element = e.target.offsetParent
            if (element == null || !element.classList.contains("header__input__container")) {
                setSearchDesktop(false)
            }
        }

        window.addEventListener('resize', handleResize)
        document.addEventListener("click", handleClick)

        handleResize()
        return () => {
            document.removeEventListener("click", handleClick)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleOpenModalProfile = () => {
        setOpenModalProfile(!openModalProfile)
    }

    return (
        <div className='header__container'>
            <div className='header__menu__icon'>
                <IoMenu />
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
                    <img src={channel} onClick={handleOpenModalProfile} />
                </div>
                {
                    openModalProfile &&
                    <Modal_profile profile={userLogin} />
                }
            </div>
        </div>
    )
}

export default Header