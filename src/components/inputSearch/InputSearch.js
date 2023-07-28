import { BiSearchAlt2 } from "react-icons/bi"
import "./InputSearch.css"
import { useNavigate } from "react-router-dom"

const InputSearch = ({ value, handleChange}) => {

    // const [researched, setResearched] = useState(false); 

    // const handleClick = () => {
    //     setResearched(true);
    // }

    return (
        <div className="container__input__search">
            <input
                type="text"
                value={value}
                onChange={handleChange} />
            <BiSearchAlt2
                className="icon__search"
                 />
        </div>
    )
}

export default InputSearch; 