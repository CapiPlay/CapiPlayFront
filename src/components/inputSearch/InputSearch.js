import { BiSearchAlt2 } from "react-icons/bi"
import "./InputSearch.css"
const InputSearch = () => {

    return (
        <div className="container__input__search">
            <input type="text" />
            <BiSearchAlt2 color="var(--lightpurple)" size={20} />
        </div>
    )
}

export default InputSearch; 