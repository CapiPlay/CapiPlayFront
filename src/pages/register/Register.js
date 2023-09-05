
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Register.css"

// Componentes
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import InputFile from "../../components/inputFile/InputFile"

// Icons
import { FaFacebookF } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import ChooseCategory from "./chooseCategory/ChooseCategory"

// Lógica
import { useDispatch } from "react-redux"
import { doSignup } from "../../store/features/user/userSlice"
import { ToastContainer, toast } from "react-toastify"

const Register = () => {

    const user = new FormData()
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
    const [image, setImage] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [bPChooseCategory, setbPChooseCategory] = useState(false)
    const [fileChanged, setFileChanged] = useState(false)
    const navigate = useNavigate()
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

    const keyboard = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }

    const nextStep = () => {
        setbPChooseCategory(!bPChooseCategory)
    }

    const register = async (e) => {
        e.preventDefault()

        setRegisterData({ ...registerData, foto1: image })
        user.append("nome", registerData.nome)
        user.append("senha", registerData.senha)
        user.append("email", registerData.email)
        user.append("perfil", registerData.nome)
        user.append("dataNascimento", registerData.dataNascimento)
        user.append("foto1", image)

        try {
            await dispatch(doSignup(user, image))
            console.log("entrei")
            // navigate('/login')
            // nextStep()
        } catch (err) {
            toast.error("Erro ao realizar o cadastro")
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFileChanged(true)
            setImage(file)
        }
    }

    const handleRemoveFile = (e) => {
        e.preventDefault()
        setFileChanged(!fileChanged)
        setImage(null)
    }

    return (
        <>
            {!bPChooseCategory &&
                <div className="container__all__register" style={{ height: `${windowHeight}px` }}>
                    <form className="container__register">
                        <h1>Cadastro</h1>
                        <h2>O Mundo dos Videos ao seu Alcance</h2>
                        <div className="container__inputs__register">
                            <Input
                                placeholder={"E-mail"}
                                type={"email"}
                                required={true}
                                name={"email"}
                                onChange={keyboard}
                                value={registerData.email}
                            />
                            <Input
                                placeholder={"Nome de usuário"}
                                type={"text"}
                                required={true}
                                name={"nome"}
                                onChange={keyboard}
                                value={registerData.nome}
                            />
                            <Input
                                placeholder={"Data de Nascimento"}
                                type={"date"}
                                required={true}
                                name={"dataNascimento"}
                                onChange={keyboard}
                                value={registerData.dataNascimento}
                            />
                            <Input
                                placeholder={"Senha"}
                                type={"password"}
                                required={true}
                                name={"senha"}
                                onChange={keyboard}
                                value={registerData.senha}
                            />
                            <Input
                                placeholder={"Confirmar senha"}
                                type={"password"}
                                required={true}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                            />
                            <InputFile
                                label={"Foto de perfil"}
                                radius={"20px"}
                                onChange={handleFileChange}
                                removeFile={handleRemoveFile}
                                file={image}
                                key={fileChanged.toString()}
                            />
                        </div>
                        <div className="container__button__register">
                            <Button
                                label={"Cadastrar"}
                                type={"submit"}
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
                            <div><FaGoogle style={{ fontSize: "1.5rem" }} /></div>
                        </div>
                        <div className="container__login__register">
                            <span>Já possui uma conta?</span>
                            <span>
                                <Link to={"/login"}>
                                    Login
                                </Link>
                            </span>
                        </div>
                    </form>

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
            }

            {
                bPChooseCategory &&
                <ChooseCategory back={nextStep} />
            }

        </>
    )
}

export default Register