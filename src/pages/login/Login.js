
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { doLogin } from "../../store/features/user/userSlice"

import "./Login.css"

// Componentes
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"

// Icons
import { FaFacebookF } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

const Login = ({ }) => {

    const [loginData, setLoginData] = useState({ email: '', senha: '' })
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const dispatch = useDispatch()

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const login = () => {

        console.log("Entrei nesse caralho")

        // try {
        //     // const res = dispatch(doLogin(loginData))
        //     // console.log(res)
        // } catch (err) {
        //     console.log("Deu erro")
        // }
    }

    return (
        <div className="container__all__login" style={{ minHeight: `${windowHeight}px` }} >
            <form className="container__login">
                <h1>Login</h1>
                <h2>
                    O Mundo dos Vídeos ao seu Alcance!
                </h2>
                <div className="container__inputs__login">
                    <Input
                        placeholder={"E-mail"}
                        type={"email"}
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required={true}
                    />
                    <Input
                        placeholder={"Senha"}
                        type={"password"}
                        value={loginData.senha}
                        onChange={(e) => setLoginData({ ...loginData, senha: e.target.value })}
                        required={true}
                    />
                </div>
                <div className="container__specialty__login">
                    <div>
                        <input type="checkbox" />
                        <label>Manter-me conectado</label>
                    </div>
                    <span>Esqueceu a senha?</span>
                </div>
                <div className="container__button__login">
                    <Button
                        label={"Entrar"}
                        onClick={login}
                        type={"submit"}
                        principal={true}
                    />
                </div>
                <div className="container__seperation__login">
                    <div></div>
                    <span>ou</span>
                    <div></div>
                </div>
                <div className="container__other__login">
                    <div><FaFacebookF style={{ height: "1.5rem" }} /></div>
                    <div><FaGoogle style={{ height: "2rem" }} /></div>
                </div>
                <div className="container__register__login">
                    <span>Novo aqui?</span>
                    <span>
                        <Link to={"/register"}>
                            Cadastre-se
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default (Login);