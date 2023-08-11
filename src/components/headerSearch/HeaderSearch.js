import "./HeaderSearch.css"

import { IoMdArrowBack } from "react-icons/io"
import { BiSearchAlt2 } from "react-icons/bi"

import { useNavigate } from "react-router-dom";
import { useState } from "react";

// PROPS: 
// - valueInput = valor que vai representar o que o usuário digitar na pesquisa
// - handleChange = usado para pegar o valor do que está sendo digitado no input com event.target.value 
// - functionBack = determina em que página o botão de voltar irá redirecionar 
// - handleSearch = define a rota que vai armazenar o valor da pesquisa  

// OBS.: todas as informações serão setadas pelo Search/ResultSearch

const HeaderSearch = ({ valueInput, handleChange, functionBack, handleSearch }) => {

    const verifyKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="header__search">
            <IoMdArrowBack className="icon__search" onClick={functionBack} />
            <div className="container__input__search">
                <input
                    type="text"
                    value={valueInput}
                    onChange={handleChange}
                    onKeyPress={verifyKeyPress} />
                <BiSearchAlt2
                    className="icon__search"
                />
            </div>
        </div>
    )
}

export default HeaderSearch; 