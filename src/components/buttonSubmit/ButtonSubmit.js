import '../buttonSubmit/ButtonSubmit.css'
import Cookies from 'js-cookie'

// service
import EngajamentoService from '../../service/Engajamento/InscricaoService'

// hooks
import { useState } from 'react'
import { useSelector } from 'react-redux'

const ButtonSubmit = () => {

  const idUserPost = useSelector((state) => state.shorts.idUserPost)

  const user = JSON.parse(Cookies.get("user"))

  const [isClicked, setIsClicked] = useState(false)
  const [buttonText, setButtonText] = useState('Inscrever-se')

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    setButtonText(isClicked ? 'Inscrever-se' : 'Inscrito')
    EngajamentoService.criar(user.uuid, idUserPost)
  }

  const buttonClassName = `container__submit__button ${isClicked ? 'animate' : ''}`

  return (
    <div className={buttonClassName} onClick={handleClick}>
      <span className="button__label">{buttonText}</span>
    </div>
  )
}

export default ButtonSubmit
