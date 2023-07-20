import "./Search.css"
import { useNavigate } from "react-router-dom";

// ícones
import { IoMdArrowBack } from "react-icons/io"
import { MdRestartAlt } from "react-icons/md"

// componentes
import InputSearch from "../../components/inputSearch/InputSearch";
import { useState } from "react";

const Search = () => {

    const nav = useNavigate();

    // state exemplar
    const [lastSearches, setLastSearches] = useState
        ([
            "Filme como treinar seu dragão é bom?",
            "Pica - Pau completo dublado",
            "Como fazer uma torta de abacaxi com calda de côco?"
        ]);

    const handleClick = () => {
        nav("/");
    }

    return (
        <div className="container__search">
            <div className="header__search">
                <IoMdArrowBack size={20} color="var(--lightpurple)" onClick={handleClick} />
                <InputSearch />
            </div>
            {lastSearches && lastSearches.map((lastSearch) => (
                <div className="container__last__search">
                    <MdRestartAlt size={20} color="var(whitesmoke)" />
                    <span>{lastSearch}</span>
                </div>
            ))}
        </div>
    )
}
export default Search; 