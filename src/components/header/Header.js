import React, { useEffect, useState } from 'react';

// componentes
import Modal_menu from '../../pages/home/modal_menu/modal_menu';
import logo from '../../assets/image/Logo.png'
import Search from '../../pages/searchMobile/Search'

// ícones
import { TbUpload } from 'react-icons/tb'
import { AiOutlineSearch } from 'react-icons/ai'

import './Header.css'

import Modal_profile from './modal_profile/Modal_profile';
import { Link, useLocation, useNavigate } from 'react-router-dom';

//imageProfile: a partir do back-end, do token recebido, será mandado a imagem do usuário, que deve 
//ser passada para o header para ser exibida 
function Header({ userLogin, searchValue }) {

    const location = useLocation()
    const [search, setSearch] = useState(false);
    const [searchDesktop, setSearchDesktop] = useState(false);
    const [verifyClicked, setVerifyClicked] = useState(false);
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    // Campo de pesquisa em Desktop
    const nav = useNavigate();

    const [valueInput, setValueInput] = useState(searchValue);

    const handleClick = () => {
        setSearch(!search);
    }

    const handleSearch = () => {
        nav(`/result-search?search=${encodeURIComponent(valueInput)}`);
        console.log("search: ")
    }

    const verifyKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleChange = (e) => {
        setValueInput(e.target.value);
    }

    useEffect(() => {
        if (valueInput === null) {
            const urlSearchParams = new URLSearchParams(location.search);
            const searchParams = urlSearchParams.get("q");
            setValueInput(searchParams)
        }

        if (verifyClicked) {
            setSearchDesktop(true)
        } else {
            setSearchDesktop(false)
        }
    }, [])

    const verifyToken = () => {
        if (userLogin === true) {
            return true;
        } else {
            return false;
        }
    }

    const handleSelection = (searchSelected) => {
        setValueInput(searchSelected)
        setVerifyClicked(true)
        nav(`/result-search?search=${searchSelected}`)
    }

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }

        function handleClick(e) {
            const element = e.target.offsetParent;
            if (element == null || !element.classList.contains("header__input__container")) {
                setSearchDesktop(false);
            }

        }

        window.addEventListener('resize', handleResize);
        document.addEventListener("click", handleClick)

        handleResize();
        return () => {
            document.removeEventListener("click", handleClick)
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderMobileView = () => (
        <div className='container__header'>
            <div className='box__header'>
                <div className='modal__menu' >
                    <Modal_menu />
                </div>
                <div className='container__logo'>
                    <img src={logo} className='container__logo' />
                </div>
            </div>
            <div className='box__header'>
                <div className='header__input__container' onClick={handleClick}>
                    <AiOutlineSearch className='menu__icon' color='var(--lightpurple)' fontSize={25} />
                </div>
                <Modal_profile profile={userLogin} />

            </div>
            {search &&
                <Search />
            }
        </div>
    );

    const renderDesktopView = () => (
        <div className='header__container' >
            <div className='header__logo__home'>
                <Link to='/'>
                    <img src={logo} className='container__logo' />
                </Link>
            </div>
            <div className='header__input__container'>
                <input
                    className='header__input__text__search'
                    placeholder='Pesquisar'
                    onFocus={() => setSearchDesktop(true)}
                    value={valueInput}
                    onKeyPress={verifyKeyPress}
                    onChange={handleChange} />
                <AiOutlineSearch />
                {searchDesktop &&
                    <Search />
                }
            </div>
            <div className='header__info'>
                <div>
                    {verifyToken() &&
                        <Link to="/upload" className='upload__icon__header' ><TbUpload /></Link>
                    }
                </div>
                <div>
                    < Modal_profile profile={userLogin} />
                </div>
            </div>
        </div>
    );

    const renderTabletView = () => (
        <div className='container__header'>
            <div className='box__header'>
                <div className='modal__menu'>
                    <Modal_menu />
                </div>
            </div>
            <div className='box__header'>
                <div className='header__input__container' onClick={handleClick}>
                    <AiOutlineSearch className='menu__icon' color='var(--lightpurple)' fontSize={25} />
                </div>
                <Modal_profile profile={userLogin} />
            </div>
            {search &&
                <Search />
            }
        </div>
    );

    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
        } else if (screenSize.width < 900 && screenSize.width > 500) {
            return renderTabletView();
        } else {
            return renderMobileView();
        }
    };

    return <>{getViewToRender()}</>;

}

export default Header;