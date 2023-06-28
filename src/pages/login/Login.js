
import { useEffect, useState } from "react";

import "./Login.css"
import Input from "../../components/input/Input";

const Login = () => {
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
    }, [])

    return (
        <div className="container__all__login" style={{ height: `${windowHeight}px` }}>
            <div className="container__login">
                <h2>Login</h2>
                <span>
                    O Mundo dos Vídeos ao seu <br /> Alcance!
                </span>

                <div className="container__inputs__login">

                    <Input placeholder={"Nome"} />

                </div>

            </div>
        </div>
    )
}

export default Login;