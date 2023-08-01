
import { useEffect, useState } from "react";
import "./Button.css"

// label: O texto exibido no botão.
// onClick: Uma função de retorno de chamada chamada quando o botão é clicado.
// isActived: Um valor booleano indicando se o botão está ativo. Se definido como false, o botão será estilizado como inativo. O padrão é true.
// principal: Um valor booleano indicando se o botão é o botão principal. O botão principal é estilizado de forma diferente dos outros botões. O padrão é true.
// type: O tipo do botão, como "button", "submit" ou "reset". O padrão é "button".
const Button = ({ label, onClick, isActived, principal, type }) => {

    const [style, setStyle] = useState({
        background: "#772CE8"
    })

    useEffect(() => {
        if (!principal) {
            setStyle({
                background: "#BF94FF"
            })
        } else {
            setStyle({
                background: "#772CE8"
            })
        }
    }, [principal])

    return (
        <button
            className={`custom__button  ${!isActived ? "not__active__button" : ""}`}
            type={type}
            onClick={onClick}
            style={style}
            aria-label={"Botão " + label}
        >{label}</button>
    )
}

export default Button