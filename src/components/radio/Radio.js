import React, { useState, useEffect } from "react";
import "./Radio.css"; // Certifique-se de importar o estilo correto

const RadioInput = ({ options, selectedValue, onChange, name }) => {
  const [labelColor, setLabelColor] = useState({});
  const hasValue = selectedValue && selectedValue.length > 0;

  useEffect(() => {
    if (selectedValue) {
      setLabelColor({ color: "#BF94FF" });
    }
  }, [selectedValue]);

  const handleRadioChange = (event) => {
    onChange(event);
  };

  return (
    <div className="input__group">
      <div className="radio__options">
        {options.map((option) => (
          <label key={option.value} className="radio__label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleRadioChange}
            />
            <span className="radio__custom"></span>
            <span className={`label__input ${selectedValue === option.value ? "active" : ""}`} style={labelColor}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;