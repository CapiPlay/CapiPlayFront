// 
import "./InputFileUpload.css"

// Icons
import { AiOutlineClose } from 'react-icons/ai'
import { HiUpload } from 'react-icons/hi'

// onChange (função, obrigatória): Recebe o evento do JavaScript relacionado à mudança de arquivo como parâmetro.
// radius (string, obrigatória): O valor do raio do canto da borda para o contêiner do componente.
// label (string, obrigatória): O texto ou componente React que será exibido como rótulo do componente quando nenhum arquivo for selecionado.
// file (File ou null, obrigatória): O arquivo selecionado pelo componente. 
// removeFile (função, obrigatória): Recebe o evento do JavaScript relacionado ao clique como parâmetro.
// accept (string, obrigatória): Recebe que tipo de arquivo é aceito pelo input.

const InputFileUpload = ({ onChange, radius, label, file, removeFile, accept }) => {

    return (
        <div className="file__upload__container">
            <div className="file__upload__border">
                <HiUpload color='var(--whitesmoke)' fontSize={40} />
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
                <input id="file-input" className="file-input__input" type="file" onChange={onChange} accept={accept} />
            </div>
        </div>
    )
}

export default InputFileUpload