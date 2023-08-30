import React, { useEffect, useState } from 'react';

// componentes
import Modal_menu from '../../pages/home/modal_menu/modal_menu';
import logo from '../../assets/image/Logo.png'
import Search from '../../pages/search/Search'

// ícones
import { TbUpload } from 'react-icons/tb'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdRestartAlt } from "react-icons/md"
import { BiSearchAlt2 } from "react-icons/bi"

import './Header.css'

import Modal_profile from './modal_profile/Modal_profile';
import { Link, useLocation, useNavigate } from 'react-router-dom';

//imageProfile: a partir do back-end, do token recebido, será mandado a imagem do usuário, que deve 
//ser passada para o header para ser exibida 
function Header({ userLogin, searchValue }) {

    const location = useLocation()
    const [search, setSearch] = useState(false);
    const [searchDesktop, setSearchDesktop] = useState(false);
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
    }, [])

    // listas temporárias
    const [lastSearches, setLastSearches] = useState(([
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
    ]));

    const [searches, setSearches] = useState(([
        "Filme como treinar seu dragão é bom?",
        "Pica - Pau completo dublado",
        "Como fazer uma torta de abacaxi com calda de côco?",
        "História da America Latina",
        "Receita de pão de queijo",
        "Livros românticos",
        "Eu a patroa e as criancas",
        "React icons como funciona",
        "Torta de frango receita",
        "Livros de aventura 2023"
    ]));

    const verifyToken = () => {
        if (userLogin === true) {
            return true;
        } else {
            return false;
        }
    }

    const handleSelection = (lastSearch) => {
        setValueInput(lastSearch)
        setSearchDesktop(false);
        nav(`/result-search?search=${lastSearch}`)
    }

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
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
                    <div className="container__search__desktop">
                        {valueInput && valueInput.trim() === ''
                            ?
                            <>
                                {lastSearches && lastSearches.map((lastSearch) => (
                                    <div className="searches__hitoric__container" onClick={() => handleSelection(lastSearch)}>
                                        <MdRestartAlt className='icons__search__desktop' />
                                        <span>{lastSearch}</span>
                                    </div>
                                ))}
                            </>
                            :
                            <>
                                {searches && searches.map((search) => (
                                    <div className="searches__hitoric__container" onClick={() => handleSelection(search)}>
                                        <BiSearchAlt2 className='icons__search__desktop' />
                                        <span>{search}</span>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
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
                <AiOutlineSearch className='menu__icon' color='var(--lightpurple)' fontSize={25} />
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