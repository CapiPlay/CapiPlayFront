import React, { useRef, useEffect, useState } from "react";
import "./InputTextArea.css";

const InputTextArea = ({ placeholder, value, onChange, required, enable, name }) => {
  const [inputBorderColor, setInputBorderColor] = useState({});
  const [labelColor, setLabelColor] = useState({});
  const ref = useRef(null);
  const hasValue = value && value.length > 0;

  useEffect(() => {
    if (value) {
      setLabelColor({ color: "#BF94FF" });
      setInputBorderColor({ borderColor: "#BF94FF" });
    }
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      setLabelColor({ color: "#BF94FF" });
      setInputBorderColor({ borderColor: "#BF94FF" });
    };

    const handleBlur = () => {
      if (!hasValue) {
        setLabelColor({ color: "#141317" });
        setInputBorderColor({ borderColor: "#141317" });
      }
    };

    const inputElement = ref.current;

    if (inputElement) {
      inputElement.addEventListener("focus", handleFocus);
      inputElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("focus", handleFocus);
        inputElement.removeEventListener("blur", handleBlur);
      }
    };
  }, [hasValue]);

  return (
    <div className="input__group__textArea">
      <textarea
        className="input__control__textArea"
        value={value}
        onChange={onChange}
        enable={enable}
        required={required}
        ref={ref}
        style={inputBorderColor}
        placeholder={placeholder}
        name={name}
      />
      <label className={`label__input__textArea ${hasValue ? "active" : ""}`} style={labelColor}>
        {placeholder}
      </label>
    </div>
  );
};

export default InputTextArea;