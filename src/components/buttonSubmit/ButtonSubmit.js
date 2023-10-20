import '../buttonSubmit/ButtonSubmit.css'
import Cookies from 'js-cookie'

// service
import EngajamentoService from '../../service/Engajamento/InscricaoService'

// hooks
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const ButtonSubmit = () => {

  const idUserPost = useSelector((state) => state.shorts.idUserPost)

  const [user, setUser] = useState()

  const [isSubscribe, setIsSubscribe] = useState(false)

  const handleClick = async () => {
    setIsSubscribe(!isSubscribe)
    EngajamentoService.criar({ idUsuario: user.uuid, idCanal: idUserPost })
  }

  useEffect(() => {

    const jsonUser = Cookies.get("user")
    if (jsonUser !== "" && jsonUser) {
      setUser(JSON.parse(jsonUser))
    }

    const findSubscriber = async () => {
      const engajGet = await EngajamentoService.buscarUm(idUserPost)
      if (engajGet) {
        setIsSubscribe(true)
      }
    }
    findSubscriber()
  }, [])

  const buttonClassName = `container__submit__button ${isSubscribe ? 'animate' : ''}`

  return (

    <div className={buttonClassName} onClick={handleClick}>
      <span className="button__label">{isSubscribe ? "Inscrito" : "Inscrever-se"}</span>
    </div>
  )
}
export default ButtonSubmit
