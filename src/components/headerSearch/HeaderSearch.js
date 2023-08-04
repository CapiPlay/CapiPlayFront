import "./HeaderSearch.css"

import { IoMdArrowBack } from "react-icons/io"

import InputSearch from "../../components/inputSearch/InputSearch";
import { useNavigate } from "react-router-dom";

const HeaderSearch = ({valueInput, handleChange}) => {

    const nav = useNavigate(); 

    return (
        <div className="header__search">
            <IoMdArrowBack size={20} color="var(--lightpurple)" onClick={() => nav("/")} />
            <InputSearch
                value={valueInput}
                handleChange={handleChange} />
        </div>
    )
}

export default HeaderSearch; 