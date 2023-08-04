import { BiSearchAlt2 } from "react-icons/bi"
import "./InputSearch.css"
import { useNavigate } from "react-router-dom"
import ResultSearch from "../tagsCarousel/TagsCarousel";
import { useState } from "react";

const InputSearch = ({ value, handleChange }) => {

    const nav = useNavigate(); 

    const enter = (e) => {
        if (e.key === 'Enter'){
            nav("/result-search")
        }
    }

    return (
        <div className="container__input__search">
            <input
                type="text"
                value={value}
                onChange={handleChange} 
                onKeyPress={enter}/>
            <BiSearchAlt2
                className="icon__search"
            />
        </div>
    )
}

export default InputSearch; 