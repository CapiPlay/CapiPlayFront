import '../buttonSubmit/ButtonSubmit.css'
import { useState } from 'react'

const ButtonSubmit = ({ label, onClick }) => {
  const [isClicked, setIsClicked] = useState(false)
  const [buttonText, setButtonText] = useState('Inscrever-se')

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    setButtonText(isClicked ? 'Inscrever-se' : 'Inscrito')
  }

  const buttonClassName = `container__submit__button ${isClicked ? 'animate' : ''}`

  return (
    <div className={buttonClassName} onClick={handleClick}>
      <span className="button__label">{buttonText}</span>
    </div>
  )
}

export default ButtonSubmit
