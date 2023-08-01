import React, { useRef, useEffect, useState } from "react"
import "./Input.css"

const Input = ({ placeholder, value, onChange, onClick, required, type, enable, name }) => {
  const [inputType, setInputType] = useState("text")
  const [labelColor, setLabelColor] = useState({})
  const [inputBorderColor, setInputBorderColor] = useState({})

  const ref = useRef(null)
  const hasValue = value && value.length > 0

  const maxYear = new Date().getFullYear() - 6
  const minYear = new Date().getFullYear() - 150
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()

  useEffect(() => {

    if(value) {
      setLabelColor({ color: "#BF94FF" })
      setInputBorderColor({ borderColor: "#BF94FF" })
    }

  }, [])

  useEffect(() => {
    const handleFocus = () => {
      if (type === "date") {
        setInputType("date")
      }
      setLabelColor({ color: "#BF94FF" })
      setInputBorderColor({ borderColor: "#BF94FF" })
    }

    if (type !== "date") {
      setInputType(type)
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
  }

  const validateDate = (inputValue) => {
    if (type === "date" && inputValue) {
      const inputDate = new Date(inputValue)
      const yearInputDate = inputDate.getFullYear()
      const maxDate = new Date(`${maxYear}-${month}-${day}`)
      const minDate = new Date(`${minYear}-${month}-${day}`)

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
        value={value}
        onChange={(e) => handleInputChange(e)}
        onClick={onClick}
        enable={enable}
        required={required}
        ref={ref}
        style={inputBorderColor}
        placeholder={placeholder}
        name={name}
        max={type === "date" ? `${maxYear}-${month}-${day}` : undefined}
        min={type === "date" ? `${minYear}-${month}-${day}` : undefined}
      />
      <label className={`label__input ${hasValue ? "active" : ""}`} style={labelColor}>
        {placeholder}
      </label>
    </div>
  )
}

export default Input
