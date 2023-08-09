import { BiSearchAlt2 } from "react-icons/bi"
import "./InputSearch.css"
import { useNavigate } from "react-router-dom"
import ResultSearch from "../tagsCarousel/TagsCarousel";
import { useState } from "react";

// PROPS: 
// - handleChange = usado para setar o valor do input com event.target.value 
// - value = utilizado para guardar o valor que será passado pelo input 
// - handleSearch = usado para realizar a lógica de busca e direcionar aos resultados encontrados

// *todos os props utilizados serão repassados ao HeaderSearch, e, posteriormente, setados pelo Search

const InputSearch = ({ value, handleChange, handleSearch }) => {

    const verifyKeyPress = (e) =>{
        if(e.key === 'Enter'){
            handleSearch();
        }
    }

    return (
        <div className="container__input__search">
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyPress={verifyKeyPress}/>
            <BiSearchAlt2
                className="icon__search"
            />
        </div>
    )
}

export default InputSearch; 