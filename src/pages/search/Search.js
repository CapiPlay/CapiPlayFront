import "./Search.css"
import { useNavigate } from "react-router-dom";

// ícones
import { IoMdArrowBack } from "react-icons/io"
import { MdRestartAlt } from "react-icons/md"
import { BiSearchAlt2 } from "react-icons/bi"

// componentes
import InputSearch from "../../components/inputSearch/InputSearch";
import { useState } from "react";
import ResultSearch from "../../components/tagsCarousel/TagsCarousel";

const Search = () => {

    const nav = useNavigate();
    const sizeIcon = 20;

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
        "Como fazer uma torta de abacaxi com calda de côco?"
    ]));

    const [valueInput, setValueInput] = useState("");

    const handleClick = () => {
        nav("/");
    }

    const handleChange = (e) => {
        setValueInput(e.target.value);
    }

    const renderSearch = () => {
        if (valueInput.trim() === '') {
            return (
                <>
                    {lastSearches && lastSearches.map((lastSearch) => (
                        <div className="search__box">
                            <MdRestartAlt size={sizeIcon} color="var(--whitesmoke)" />
                            <span>{lastSearch}</span>
                        </div>
                    ))}
                </>
            )
        } else {
            return (
                <>
                    {searches && searches.map((search) => (
                        <div className="search__box">
                            <BiSearchAlt2 size={sizeIcon} color="var(--whitesmoke)" />
                            <span>{search}</span>
                        </div>
                    ))}
                </>
            )
        }
    }

    return (
        <div className="container__search">
            <div className="header__search">
                <IoMdArrowBack size={sizeIcon} color="var(--lightpurple)" onClick={handleClick} />
                <InputSearch
                    value={valueInput}
                    handleChange={handleChange} />
            </div>
            {renderSearch()}
        </div>
    )
}
export default Search; 