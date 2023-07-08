import React, { useRef, useEffect, useState } from "react"
import "./Input.css"

// placeholder: O texto de espaço reservado (placeholder) exibido na caixa de entrada.
// value: O valor atual da caixa de entrada.
// onChange: Uma função de retorno de chamada chamada sempre que o valor da caixa de entrada é alterado.
// onClick: Uma função de retorno de chamada chamada quando a caixa de entrada é clicada.
// required: Um valor booleano indicando se a caixa de entrada é obrigatória.
// type: O tipo de entrada da caixa de texto (por exemplo, "text", "password", "date"). O padrão é "text".
// enable: Um valor booleano indicando se a caixa de entrada está habilitada para interação do usuário.
// name: O nome atribuído à caixa de entrada.

const Input = ({ placeholder, value, onChange, onClick, required, type, enable, name }) => {
  const [inputType, setInputType] = useState("text")
  const [labelColor, setLabelColor] = useState({})
  const [inputBorderColor, setInputBorderColor] = useState({})

  const ref = useRef(null)
  const hasValue = value && value.length > 0

  useEffect(() => {
    const handleFocus = () => {
      if(type === "date") {
        setInputType("date")
      } 
      setLabelColor({ color: "#BF94FF" })
      setInputBorderColor({ borderColor: "#BF94FF" })
    }

    if(type !== "date") {
      setInputType(type)
    }

    const handleBlur = () => {
      setInputType("text")
      if (!hasValue) {
        setLabelColor({ color: "#141317" })
        setInputBorderColor({ borderColor: "#141317" })
      }
    }

    const inputElement = ref.current

    if (inputElement) {
      inputElement.addEventListener("focus", handleFocus)
      inputElement.addEventListener("blur", handleBlur)
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("focus", handleFocus)
        inputElement.removeEventListener("blur", handleBlur)
      }
    }
  }, [hasValue, type])

  return (
    <div className="input__group">
      <input
        className="input__control"
        type={inputType}
        value={value}
        onChange={onChange}
        onClick={onClick}
        enable={enable}
        required={required}
        ref={ref}
        style={inputBorderColor}
        name={name}
      />
      <label className={`label__input ${hasValue ? "active" : ""}`} style={labelColor}>
        {placeholder}
      </label>
    </div>
  )
}

export default Input
