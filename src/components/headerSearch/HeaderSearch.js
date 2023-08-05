import "./HeaderSearch.css"

import { IoMdArrowBack } from "react-icons/io"

import InputSearch from "../../components/inputSearch/InputSearch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// PROPS: 
//  - valueInput e handleInput = utilizados para realizar verificações de interação do usuário com o input (InputSearch e Search)
//  - functionBack = utilizado para as outras páginas definirem a rota de volta do botão 

const HeaderSearch = ({ valueInput, handleChange, functionBack }) => {

    return (
        <div className="header__search">
            <IoMdArrowBack size={20} color="var(--lightpurple)" onClick={functionBack} />
            <InputSearch
                value={valueInput}
                handleChange={handleChange} />
        </div>
    )
}

export default HeaderSearch; 