import '../buttonSubmit/ButtonSubmit.css'

const ButtonSubmit = ({ label, onClick, type }) => {
    return (
        <button
            type={type}
            className="custom__button__submit"
            onClick={onClick}
        >{label}</button>
    )
}
export default ButtonSubmit