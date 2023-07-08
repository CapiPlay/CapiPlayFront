import { useEffect, useState } from 'react'

import '../shorts/Shorts.css'

//imagens
import imageShorts from "../../assets/imagemShorts.png"
import imagePerfil from "../../assets/imagemPerfil.png"

//componentes
import Button from '../../components/button/Button.js'

//icons
import { BiLike } from "react-icons/bi"
import { BiDislike } from "react-icons/bi"
import { BiCommentDetail } from "react-icons/bi"

const Shorts = () => {

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

    return (
        <div className='container__all__shorts' style={{ minHeight: `${windowHeight}px` }} >

            {/* HEADER e BACK HEADER*/}
            
            <div className='container__video'>
                <img src={imageShorts} alt="Imagem shorts" />

                <div className='container__icons__shorts'>
                    <BiLike />
                    <span>32K</span>
                    <BiDislike />
                    <BiCommentDetail />
                </div>

                <div className='container__informations__video'>
                    <span>Como montar rapidamente um cubo mágico muito rápido</span>
                    <img src={imagePerfil} alt="Imagem de Perfil" />
                    <span>Chill Vibes</span>
                    <Button label={"Entrar"} onClick={null} type={"submit"} />
                </div>

            </div>

        </div>
    )

}
export default Shorts