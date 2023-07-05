
import "./Input.css"


// placeholder (string): O texto exibido como dica dentro do campo de entrada.
// value (string): O valor atual do campo de entrada.
// onChange (function): Uma função chamada quando o valor do campo de entrada é alterado.
// onClick (function): Uma função chamada quando o campo de entrada é clicado.
// required (boolean): Indica se o campo de entrada é obrigatório ou não.
// type (string): O tipo de campo de entrada, como "text", "password", "email", entre outros.
// enable (boolean): Indica se o campo de entrada está habilitado ou desabilitado.

const Input = ({ placeholder, value, onChange, onClick, required, type, enable }) => {

    const hasValue = value && value.length > 0
    
    return (
        <div className="input__group">
            <input
                className="input__control"
                type={type}
                value={value}
                onChange={onChange}
                onClick={onClick}
                enable={enable}
                required={required}
            />
            <label className={`label__input ${hasValue ? "active" : ""}`}>{placeholder}</label>
        </div>
    )
}

export default Input
