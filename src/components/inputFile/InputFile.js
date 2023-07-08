
import { useState } from "react"
import "./InputFile.css"

const InputFile = ({ onChange, radius, label }) => {
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setSelectedFile(file)
        // onChange(file)
    }

    return (
        <div className="file-input__container">
            <label
                htmlFor="file-input" className="file-input__label"
                style={{ borderRadius: radius }}>
                {selectedFile ? "1 arquivo selecionado" : label}
            </label>
            <input
                id="file-input"
                className="file-input__input"
                type="file"
                onChange={handleFileChange}
            />
        </div>
    )
}

export default InputFile