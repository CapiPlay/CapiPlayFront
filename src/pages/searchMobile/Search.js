import "./Search.css"
import { useLocation, useNavigate } from "react-router-dom";

// ícones
import { MdRestartAlt } from "react-icons/md"
import { BiSearchAlt2 } from "react-icons/bi"

// componentes
import { useEffect, useState } from "react";
import HeaderSearch from "../../components/headerSearch/HeaderSearch";

const Search = () => {

    const sizeIcon = 20;
    const colorIcon = "var(--whitesmoke)";

    const nav = useNavigate();
    const [back, setBack] = useState(false);

    const location = useLocation();
    const urlSearchParams = new URLSearchParams(location.search);
    const searchParams = urlSearchParams.get("search");
    const [valueInput, setValueInput] = useState(searchParams ? String(searchParams) : "");

    const handleChange = (e) => {
        console.log(e)
        setValueInput(e.target.value);
    }

    const handleSearch = (value) => {
        nav(`/result-search?search=${encodeURIComponent(value && value.length > 0 ? value : valueInput)}`);
    }

    // utilizado temporariamente para simular histórico de pesquisa/sugestões de pesquisa 
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

    const renderSearch = () => {
        if (valueInput.trim() === '') {
            return (
                <>
                    {lastSearches && lastSearches.map((lastSearch) => (
                        <div className="search__box" onClick={() => handleSearch(lastSearch)}>
                            <MdRestartAlt size={sizeIcon} color={colorIcon} />
                            <span>{lastSearch}</span>
                        </div>
                    ))}
                </>
            )
        } else {
            return (
                <>
                    {searches && searches.map((search) => (
                        <div className="search__box" onClick={() => handleSearch(search)}>
                            <BiSearchAlt2 size={sizeIcon} color={colorIcon} />
                            <span>{search}</span>
                        </div>
                    ))}
                </>
            )
        }
    }

    // REFATORACAO

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    // useEffect(() => {
    // function handleClick(e) {
    //     const element = e.target.offsetParent;
    //     if (element == null || !element.classList.contains("header__input__container")) {
    //         setSearch(false);
    //     }

    // }

    // if (valueInput === null) {
    //     const urlSearchParams = new URLSearchParams(location.search);
    //     const searchParams = urlSearchParams.get("q");
    //     setValueInput(searchParams)
    // }

    // if (verifyClicked) {
    //     setSearchDesktop(true)
    // } else {
    //     setSearchDesktop(false)
    // }

    // function handleResize() {
    //     setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    // }
    // window.addEventListener('resize', handleResize);
    // handleResize();
    // return () => {
    //     window.removeEventListener('resize', handleResize);
    // };
    // }, []);

    // const nav = useNavigate();

    // const [valueInput, setValueInput] = useState(searchValue);

    // const handleClick = () => {
    //     setSearch(!search);
    // }

    // const handleSearch = () => {
    //     nav(`/result-search?search=${encodeURIComponent(valueInput)}`);
    //     console.log("search: ")
    // }

    // const verifyKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         handleSearch();
    //     }
    // }

    // const handleChange = (e) => {
    //     setValueInput(e.target.value);


    const [verifyClicked, setVerifyClicked] = useState(false);

    const handleSelection = (searchSelected) => {
        setValueInput(searchSelected)
        setVerifyClicked(true)
        nav(`/result-search?search=${searchSelected}`)
    }

    return (
        <div className="container__search" style={{ display: back ? "none" : "block" }}>
            {screenSize.width < 900
                &&
                <HeaderSearch
                    handleSearch={handleSearch}
                    valueInput={valueInput}
                    handleChange={handleChange}
                    functionBack={() => setBack(!back)} />
            }
            {renderSearch()}
        </div>
    )

}
export default Search; 