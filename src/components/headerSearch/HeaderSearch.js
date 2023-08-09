import "./HeaderSearch.css"

import { IoMdArrowBack } from "react-icons/io"

import InputSearch from "../../components/inputSearch/InputSearch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// PROPS: 
// todos os props do HeaderSearch tem apenas a função de repassar as informações que serão setadas pelo Search/ResultSearch

const HeaderSearch = ({ valueInput, handleChange, functionBack, handleSearch }) => {

    return (
        <div className="header__search">
            <IoMdArrowBack size={20} color="var(--lightpurple)" onClick={functionBack} />
            <InputSearch
                value={valueInput}
                handleChange={handleChange}
                handleSearch={handleSearch}
            />
        </div>
    )
}

export default HeaderSearch; 