
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Register.css"

// Componentes
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import InputFile from "../../components/inputFile/InputFile"

// Icons
import { FaFacebookF } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

const Register = () => {

    const objRegister = {
        nome: "",
        senha: "",
        email: "",
        perfil: "",
        foto: "",
        dataNascimento: "",
        descricao: ""
    }

    const [registerData, setRegisterData] = useState(objRegister)
    const [image, setImage] = useState()
    const [confirmPassword, setConfirmPassword] = useState("")
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const keyboard = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }

    const register = () => {
        setRegisterData({ ...registerData, foto: image })
        console.log(registerData)
        alert("")
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const formData = new FormData()
            formData.append("foto", file)
            setImage(formData)
        }
    }

    return (
        <div className="container__all__register" style={{ height: `${windowHeight}px` }}>
            <div className="container__register">
                <h1>Cadastro</h1>
                <h2>O Mundo dos Videos ao seu Alcance</h2>
                <div className="container__inputs__register">
                    <Input
                        placeholder={"E-mail"}
                        type={"email"}
                        // required={true}
                        name={"email"}
                        onChange={keyboard}
                        value={registerData.email}
                    />
                    <Input
                        placeholder={"Nome de usuário"}
                        type={"text"}
                        // required={true}
                        name={"nome"}
                        onChange={keyboard}
                        value={registerData.nome}
                    />
                    <Input
                        placeholder={"Data de Nascimento"}
                        type={"date"}
                        // required={true}
                        name={"dataNascimento"}
                        onChange={keyboard}
                        value={registerData.dataNascimento}
                    />
                    <Input
                        placeholder={"Senha"}
                        type={"password"}
                        // required={true}
                        name={"senha"}
                        onChange={keyboard}
                        value={registerData.senha}
                    />
                    <Input
                        placeholder={"Confirmar senha"}
                        type={"password"}
                        // required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    <InputFile
                        label={"Foto de perfil"}
                        radius={"20px"}
                        onChange={handleFileChange}
                        file={image}
                    />
                </div>
                <div className="container__button__register">
                    <Button
                        label={"Cadastrar"}
                        principal={true}
                        isActived={false}
                        onClick={register}
                    />
                </div>
                <div className="container__seperation__register">
                    <div></div>
                    <span>ou</span>
                    <div></div>
                </div>
                <div className="container__other__register">
                    <div><FaFacebookF style={{ height: "1.5rem" }} /></div>
                    <div><FaGoogle style={{ height: "2rem" }} /></div>
                </div>
                <div className="container__login__register">
                    <span>Já possui uma conta?</span>
                    <span>
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register