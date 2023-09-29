import '../buttonSubmit/ButtonSubmit.css'
import { useState } from 'react'
import EngajamentoService from '../../service/Engajamento/InscricaoService'
import Cookies from 'js-cookie'

const ButtonSubmit = () => {

  const user = JSON.parse(Cookies.get("user"))

  const [isClicked, setIsClicked] = useState(false)
  const [buttonText, setButtonText] = useState('Inscrever-se')

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    setButtonText(isClicked ? 'Inscrever-se' : 'Inscrito')
    EngajamentoService.criar(user.uuid)
  }

  const buttonClassName = `container__submit__button ${isClicked ? 'animate' : ''}`

  return (
    <div className={buttonClassName} onClick={handleClick}>
      <span className="button__label">{buttonText}</span>
    </div>
  )
}

export default ButtonSubmit
