
import "./Button.css"

const Button = ({ label, onClick, actived, principal, type }) => {
    return (
        <button
            type={type}
            className="custom__button"
            onClick={onClick}
        >{label}</button>
    )
}

export default Button;