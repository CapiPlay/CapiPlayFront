import React, { useState, useEffect } from "react";
import "./Radio.css"; // Certifique-se de importar o estilo correto

const Radio = ({ options, value, onChange, name }) => {
  const [labelColor, setLabelColor] = useState({});
  const hasValue = value !== undefined && value !== "";

  useEffect(() => {
    if (value) {
      setLabelColor({ color: "#BF94FF" });
    }
  }, [value]);

  const handleRadioChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="radio__group">
      <div className="radio__control">
        {options.map((option) => (
          <label key={option.value} className="radio__label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleRadioChange}
            />
            <span className="radio__custom"></span>
            <span className={`radio__label__input ${hasValue ? "radio__active" : ""}`} style={labelColor}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radio;