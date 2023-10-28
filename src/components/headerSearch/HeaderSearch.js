import "./HeaderSearch.css"

import { IoMdArrowBack } from "react-icons/io"
import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react"

// PROPS: 
// - valueInput = valor que vai representar o que o usuário digitar na pesquisa
// - handleChange = usado para pegar o valor do que está sendo digitado no input com event.target.value 
// - functionBack = determina em que página o botão de voltar irá redirecionar 
// - handleSearch = define a rota que vai armazenar o valor da pesquisa  

// OBS.: todas as informações serão setadas pelo Search/ResultSearch

const HeaderSearch = ({ valueInput, functionBack, handleSearch }) => {

    const [value, setValue] = useState(valueInput? valueInput : "")

    const verifyKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(value);
        }
    }

    return (
        <div className="header__search">
            <IoMdArrowBack className="icon__search__back" onClick={functionBack} />
            <div className="container__input__search">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={verifyKeyPress} />
                <AiOutlineSearch className="icon__search" onClick={()=>handleSearch(value)}/>
            </div>
        </div>
    )
}

export default HeaderSearch; 