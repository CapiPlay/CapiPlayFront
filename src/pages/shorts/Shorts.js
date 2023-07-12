import '../shorts/Shorts.css'

//hooks
import { useEffect, useState } from 'react'

//imagens
import imageShorts from "../../assets/imagemShorts.png"
import imagePerfil from "../../assets/imagemPerfil.png"

//componentes
import Button from '../../components/button/Button.js'

//icons
import { BiLike } from "react-icons/bi"
import { BiDislike } from "react-icons/bi"
import { BiCommentDetail } from "react-icons/bi"
import ButtonSubmit from '../../components/buttonSubmit/ButtonSubmit'

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
                    <div>
                        <BiLike />
                        <span>32K</span>
                    </div>
                    <div>
                        <BiDislike />
                        <BiCommentDetail />
                    </div>
                </div>

                <div className='container__informations__video'>
                    <div className='title__short'>
                        <span>Como montar rapidamente um cubo mágicomu ito rápidocomo ome lhormonta dor do mundo</span>
                    </div>
                    <div className='informations__profile__shorts'>
                        <img src={imagePerfil} alt="Imagem de Perfil" />
                        <span>Chill Vibes</span>
                        <div>
                            <ButtonSubmit label={"Inscrever-se"} onClick={null} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}
export default Shorts