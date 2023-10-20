import React, { useRef, useEffect, useState } from "react"
import "./Input.css"

const Input = ({ placeholder, value, onChange, onClick, required, type, enable, name }) => {
  const [inputType, setInputType] = useState("text")
  const [labelColor, setLabelColor] = useState({})
  const [inputBorderColor, setInputBorderColor] = useState({})
  const [maskedValue, setMaskedValue] = useState("") // Novo estado para o valor com máscara

  const ref = useRef(null)
  const hasValue = value && value.length > 0

  const maxYear = new Date().getFullYear() - 6
  const minYear = new Date().getFullYear() - 150
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()

  useEffect(() => {
    if (value) {
      setLabelColor({ color: "#BF94FF" })
      setInputBorderColor({ borderColor: "#BF94FF" })
    }
  }, [value])

  useEffect(() => {
    const handleFocus = () => {
      if (type === "number") {
        setInputType("text")
      } else {
        setInputType(type)
      }
      setLabelColor({ color: "#BF94FF" })
      setInputBorderColor({ borderColor: "#BF94FF" })
    }

    const handleBlur = () => {
      if (type !== "password") {
        setInputType("text")
      }
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

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const isValidDate = type === "date" ? validateDate(inputValue) : true

    if (isValidDate) {
      onChange(event)
    } else {
      const updatedEvent = { ...event }
      updatedEvent.target.value = ""
      onChange(updatedEvent)
    }

    if (type === "number") {
      // Remove todos os caracteres não numéricos
      const numericValue = inputValue.replace(/\D/g, '');

      // Aplica a máscara de número, por exemplo, para formatar como um CPF (###.###.###-##)
      const formattedValue = numericValue.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
      setMaskedValue(formattedValue);
    } else {
      setMaskedValue(inputValue);
    }
  }

  const validateDate = (inputValue) => {
    if (type === "number" && inputValue) {
      const inputDate = new Date(inputValue)
      const yearInputDate = inputDate.getFullYear()
      const maxDate = new Date(`${day}-${month}-${maxYear}`)
      const minDate = new Date(`${day}-${month}-${minYear}`)
      if ((inputDate > maxDate || inputDate < minDate) && String(yearInputDate).length === 4) {
        return false
      }
    }
    return true
  }

  return (
    <div className="input__group">
      <input
        className="input__control"
        type={inputType}
        value={maskedValue} // Use o valor com máscara aqui
        onChange={(e) => handleInputChange(e)}
        onClick={onClick}
        enable={enable}
        required={required}
        ref={ref}
        style={inputBorderColor}
        placeholder={placeholder}
        name={name}
        max={type === "date" ? `${day}-${month}-${maxYear}` : undefined}
        min={type === "date" ? `${day}-${month}-${minYear}` : undefined}
      />
      <label className={`label__input ${hasValue ? "active" : ""}`} style={labelColor}>
        {placeholder}
      </label>
    </div>
  )
}

export default Input
