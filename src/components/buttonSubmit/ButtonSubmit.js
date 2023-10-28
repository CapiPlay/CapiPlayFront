import '../buttonSubmit/ButtonSubmit.css'
import Cookies from 'js-cookie'

// service
import EngajamentoService from '../../service/Engajamento/InscricaoService'

// hooks
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InscricaoService from '../../service/Engajamento/InscricaoService'

const ButtonSubmit = ({donoDoCanal}) => {

  const idUserPost = useSelector((state) => state.shorts.idUserPost)

  const nav = useNavigate()

  const [user, setUser] = useState()

  const [isSubscribe, setIsSubscribe] = useState(false)

  const handleClick = async () => {
    if (user) {
      setIsSubscribe(!isSubscribe)
      InscricaoService.criar({ idCanal: donoDoCanal.idUsuario })
    } else {
      nav("/login")
    }
  }

  useEffect(() => {
    const jsonUser = Cookies.get("user")
    if (jsonUser !== "" && jsonUser) {
      setUser(JSON.parse(jsonUser))
    }
  }, [])

  useEffect(() => {
    const findSubscriber = async () => {
      if (user) {
        const engajGet = await InscricaoService.buscarUm( user.uuid )
        if (engajGet) {
          setIsSubscribe(true)
        }
      }
    }
    findSubscriber()
  }, [user])

  const buttonClassName = `container__submit__button ${isSubscribe ? 'animate' : ''}`

  return (

    <div className={buttonClassName} onClick={handleClick}>
      <span className="button__label">{isSubscribe ? "Inscrito" : "Inscrever-se"}</span>
    </div>
  )
}
export default ButtonSubmit
