
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { doLogin } from "../../store/features/user/userSlice"

import "./Login.css"
import 'react-toastify/dist/ReactToastify.css';

// Componentes
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"

// Icons
import { ToastContainer, toast } from "react-toastify"
import Cookies from "js-cookie"

const Login = ({ }) => {
    const navigate = useNavigate();

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

    const login = async () => {
        if (loginData.email && loginData.senha) {
            try {
                dispatch(doLogin(loginData))
                const res = JSON.parse(Cookies.get("user"))
                if (res) {
                    navigate("/")
                }
            } catch (err) {
                toast.error("E-mail ou senha inválido")
            }
        } else {
            toast.error("Preencha todos os campos")
        }
    }

    return (
        <div className="container__all__login" style={{ minHeight: `${windowHeight}px` }} >
            <div className="container__login">
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
                <div className="container__register__login">
                    <span>Novo aqui?</span>
                    <span>
                        <Link to={"/register"}>
                            Cadastre-se
                        </Link>
                    </span>
                </div>
            </div>

            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastClassName={"toast"}
                theme="colored" />

        </div>
    )
}

export default (Login);