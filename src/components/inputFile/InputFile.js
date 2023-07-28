
import "./InputFile.css"

// Icons
import { AiOutlineClose } from 'react-icons/ai'

const InputFile = ({ onChange, radius, label, file, removeFile }) => {

    return (
      <div className="file-input__container">
        <label htmlFor="file-input" className="file-input__label" style={{ borderRadius: radius }}>
          {file ? 
            <span className="file-input__span">
              1 arquivo selecionado
              <AiOutlineClose onClick={removeFile} />
            </span>
           : 
            label
          }
        </label>
        <input id="file-input" className="file-input__input" type="file" onChange={onChange} />
      </div>
    )
}

export default InputFile