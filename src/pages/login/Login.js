
import { useEffect, useState } from "react";

import "./Login.css"
import Input from "../../components/input/Input";

const Login = () => {

    const obj = {
        email: '',
        senha: ''
    }

    const [loginData, setLoginData] = useState(obj)
    const [windowHeight, setWindowHeight] = useState(document.documentElement.scrollHeight)

    useEffect(() => {
        const handleResize = () => {
            const newTotalHeight = document.documentElement.scrollHeight
            setWindowHeight(newTotalHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div className="container__all__login" style={{ height: `${windowHeight}px` }}>
            <div className="container__login">
                <h1>Login</h1>
                <h2>
                    O Mundo dos Vídeos ao seu Alcance!
                </h2>

                <div className="container__inputs__login">

                    <Input
                        placeholder={"E-mail"}
                        type={"text"}
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required={true}
                    />

                    <Input
                        placeholder={"Senha"}
                        type={"text"}
                        value={loginData.senha}
                        onChange={(e) => setLoginData({ ...loginData, senha: e.target.value })}
                        required={true}
                    />

                </div>

            </div>
        </div>
    )
}

export default Login;