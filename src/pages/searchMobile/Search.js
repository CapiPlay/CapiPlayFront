import "./Search.css"
import { useLocation, useNavigate } from "react-router-dom";

// ícones
import { MdRestartAlt } from "react-icons/md"
import { BiSearchAlt2 } from "react-icons/bi"

// componentes
import { useEffect, useState } from "react";
import HeaderSearch from "../../components/headerSearch/HeaderSearch";
import VideoService from "../../service/Video/VideoService";

const Search = ({ valueSearch }) => {

    const sizeIcon = 20;
    const colorIcon = "var(--whitesmoke)";

    const nav = useNavigate();
    const [back, setBack] = useState(false);

    const location = useLocation();
    const urlSearchParams = new URLSearchParams(location.search);
    const searchParams = urlSearchParams.get("search");
    const [valueInput, setValueInput] = useState(searchParams ? String(searchParams) : valueSearch ? valueSearch : "");

    const handleChange = (e) => {
        console.log(e.target.value)
        setValueInput(e.target.value);
    }

    const handleSearch = (value) => {
        VideoService.pesquisarValor(value && value.length > 0 ? value : valueInput, false).then(
            nav(`/result-search?search=${encodeURIComponent(value && value.length > 0 ? value : valueInput)}`))
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

    useEffect(() => {
        VideoService.buscarHistoricoPesquisa().then(
            (res) => {
                setLastSearches(res);
            }
        )

    }, [])

    useEffect(() => {
        console.log(valueSearch)
    }, [valueSearch])

    const [searches, setSearches] = useState(([
        // "Filme como treinar seu dragão é bom?",
        // "Pica - Pau completo dublado",
        // "Como fazer uma torta de abacaxi com calda de côco?",
        // "História da America Latina",
        // "Receita de pão de queijo",
        // "Livros românticos",
        // "Eu a patroa e as criancas",
        // "React icons como funciona",
        // "Torta de frango receita",
        // "Livros de aventura 2023"
    ]));

    const renderSearch = () => {
        if (valueInput?.trim() === '') {
            return (
                <>
                    {lastSearches && lastSearches.map((lastSearch) => (
                        <div className="search__box" onClick={() => handleSearch(lastSearch.pesquisa)}>
                            <MdRestartAlt className="icons__search" />
                            <span>{lastSearch.pesquisa}</span>
                        </div>
                    ))}
                </>
            )
        } else {
            return (
                <>
                    {searches && searches.map((search) => (
                        <div className="search__box" onClick={() => handleSearch(search)}>
                            <BiSearchAlt2 className="icons__search" />
                            <span>{search}</span>
                        </div>
                    ))}
                </>
            )
        }
    }

    const [verifyClicked, setVerifyClicked] = useState(false);

    const handleSelection = (searchSelected) => {
        setValueInput(searchSelected)
        setVerifyClicked(true)
        nav(`/result-search?search=${searchSelected}`)
    }

    return (
        <div className="container__search" style={{ display: back ? "none" : "block" }}>
            {window.innerWidth <= 900
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