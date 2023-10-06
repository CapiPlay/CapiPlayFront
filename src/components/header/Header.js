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
import Cookies from 'js-cookie'
import VideoService from '../../service/Video/VideoService'

const Header = ({ searchValue }) => {

    const nav = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [search, setSearch] = useState(false)
    const [verifyClicked, setVerifyClicked] = useState(false)
    const [valueInput, setValueInput] = useState(searchValue)

    const [image, setImage] = useState(notFound)
    const [usuario, setUsuario] = useState(false)
    const [widthPage, setWidthPage] = useState()
    const [openModalProfile, setOpenModalProfile] = useState(false)
    const [searches, setSearches] = useState([]);
    const [lastSearches, setLastSearches] = useState([
        "Benefícios da meditação para a saúde",
        "Receita de bolo de cenoura com cobertura de chocolate",
        "Principais destinos turísticos na Europa",
        "História da America Latina",
        "Receita de pão de queijo",
        "Livros românticos",
        "Eu a patroa e as criancas",
        "React icons como funciona",
        "Torta de frango receita",
        "Livros de aventura 2023",
    ]);

    // Search
    const handleClick = () => {
        setSearch(true)
    }

    const handleSearch = () => {
        VideoService.pesquisarValor(valueInput, false).then(
            nav(`/result-search?search=${encodeURIComponent(valueInput)}`)
        )
    }

    const verifyKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(valueInput)
        }
        filterSearch(valueInput)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setValueInput(searchValue);
        filterSearch(searchValue);
    };

    const filterSearch = (searchValue) => {
        const search = lastSearches.filter((search) => {
            return search.pesquisa.toLowerCase().includes(searchValue);
        });
        setSearches(search);
    };
    

    useEffect(() => { 

        if (valueInput === null) {
            const urlSearchParams = new URLSearchParams(location.search)
            const searchParams = urlSearchParams.get("q")
            setValueInput(searchParams)
        } 

        if (verifyClicked) {
            setSearch(true)
        } else {
            setSearch(false)
        }

        document.addEventListener("click", handleClickBlur)
        setWidthPage(window.innerWidth)

        return () => {
            document.removeEventListener("click", handleClickBlur)
        }

    }, [])

    //Ações de usuário
    const handleOpenModalProfile = () => {
        setOpenModalProfile(!openModalProfile)
    }

    const handleOpenSideBar = async () => {
        dispatch(doIsClicked())
    }

    const handleClickBlur = (e) => {
        const element = e.target.offsetParent
        if (element == null || !element.classList.contains("header__input__container")) {
            setSearch(false)
        }
    }

    useEffect(() => {
        const userCookie = Cookies.get("user")

        if (userCookie) {
            try {
                setUsuario(true)
                const user = JSON.parse(userCookie)
                if (user && user.foto) {
                    setImage("http://10.4.96.50:7000/api/usuario/static/" + user.foto)
                } else {
                    setImage(notFound)
                }
            } catch (error) {
                setImage(notFound)
            }
        } else {
            setImage(notFound)
        }
    }, [])


    return (
        <div className='header__container'>
            <div className='header__menu__icon'>
                <IoMenu onClick={handleOpenSideBar} />
            </div>
            <div className='header__input__container' style={widthPage <= 900 ? {} : { position: "relative" }}>
                <div>
                    <input
                        className='header__input__text__search'
                        placeholder='Pesquisar'
                        onFocus={() => setSearch(true)}
                        onClick={handleClickBlur}
                        value={valueInput}
                        onKeyPress={verifyKeyPress}
                        onChange={handleChange} />
                    <AiOutlineSearch onClick={handleClick} />
                </div>
                {
                    search &&
                    <Search valueSearch={valueInput} change={handleChange} searches={searches} lastSearches={lastSearches} setLastSearches={setLastSearches}/>
                }
            </div>
            <div className='header__info'>
                <div className='info__from__header'>
                    {
                        usuario ? (
                            <Link to={"/upload"}><TbUpload /></Link>
                        ) : (
                            <Link to={"/login"}><TbUpload /></Link>
                        )
                    }
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