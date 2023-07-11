import React, { useRef, useEffect, useState } from "react"
import "./Input.css"

const Input = ({ placeholder, value, onChange, onClick, required, type, enable }) => {
    
  const [labelColor, setLabelColor] = useState({})
  const [inputBorderColor, setInputBorderColor] = useState({})

  const ref = useRef(null)
  const hasValue = value && value.length > 0

  useEffect(() => {
    const handleFocus = () => {
      setLabelColor({ color: "#BF94FF" })
      setInputBorderColor({ borderColor: "#BF94FF" })
    }

    const handleBlur = () => {
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
  }, [hasValue])

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
        ref={ref}
        style={inputBorderColor}
        name={type}
      />
      <label className={`label__input ${hasValue ? "active" : ""}`} style={labelColor}>
        {placeholder}
      </label>
    </div>
  )
}

export default Input
