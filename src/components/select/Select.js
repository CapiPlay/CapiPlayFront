import "./Select.css";

import React, { useRef, useEffect, useState } from "react";

const Select = ({ options, value, onChange, placeholder, required, enable, name }) => {

    const [labelColor, setLabelColor] = useState({});
    const [inputBorderColor, setInputBorderColor] = useState({});

    const ref = useRef(null);
    const hasValue = value && value.length > 0;

    useEffect(() => {
        if (value) {
            setLabelColor({ color: "#BF94FF" });
            setInputBorderColor({ borderColor: "#BF94FF" });
        }
    }, [value]);

    const handleSelectChange = (event) => {
        onChange(event);
    };

    return (
        <div className="select__group">
            <select
                className="select__control"
                value={value}
                onChange={(e) => handleSelectChange(e)}
                enable={enable}
                required={required}
                ref={ref}
                style={inputBorderColor}
                name={name}
            >
                <option value="" disabled hidden>
                    {""}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label className={`select__label__input ${hasValue ? "select__active" : ""}`} style={labelColor}>
                {placeholder}
            </label>
        </div>
    );
};

export default Select;