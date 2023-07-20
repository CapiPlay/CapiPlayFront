import { useNavigate } from "react-router-dom";
import "./HeaderToBack.css"
import { IoMdArrowBack } from "react-icons/io"

const HeaderToBack = ({ text, route }) => {

    const nav = useNavigate();

    const handleClick = () => {
        nav(route);
    }
    
    return (
        <div className="header__to__back">
            <div className="button__text__back" onClick={handleClick}>
                <IoMdArrowBack size={16} color="var(--lightpurple)" />
                <span>{text || "Voltar"}</span>
            </div>
        </div>
    )
}
export default HeaderToBack;