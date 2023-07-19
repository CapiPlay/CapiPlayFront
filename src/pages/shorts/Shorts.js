import '../shorts/Shorts.css'

//hooks
import { useEffect, useState } from 'react'

//imagens
import imageShorts from "../../assets/imagemShorts.png"
import imagePerfil from "../../assets/imagemPerfil.png"

//componentes
import ButtonSubmit from '../../components/buttonSubmit/ButtonSubmit'
import Header from '../../components/header/Header'

//icons
import { BiLike } from "react-icons/bi"
import { BiDislike } from "react-icons/bi"
import { BiCommentDetail } from "react-icons/bi"
import { BsFillArrowUpSquareFill } from "react-icons/bs"
import { BsFillArrowDownSquareFill } from "react-icons/bs"

const Shorts = ({ videoTitle }) => {

    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [headerAppearing, setHeaderAppearing] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setHeaderAppearing(windowWidth >= 576);
    }, [windowWidth]);

    return (
        <div className='container__all__shorts' style={{ minHeight: `${windowHeight}px` }} >

            {
                headerAppearing &&
                <>
                    <Header />
                </>

            }
            {
                headerAppearing &&
                <>
                    <div className='container__button__pass__shorts'>
                        <button><BsFillArrowUpSquareFill /></button>
                        <button><BsFillArrowDownSquareFill /></button>
                    </div>
                </>
            }
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
                        <span>Testando o título do vídeo, para ver se ele está funcionando corretamente</span>
                    </div>
                    <div className='informations__profile__shorts'>
                        <div className='profile__shorts'>
                            <img src={imagePerfil} alt="Imagem de Perfil" />
                            <span>@11111111111111111111</span>
                        </div>
                        <div className='button__submit__shorts'>
                            <ButtonSubmit label={"Inscrever-se"} onClick={null} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}
export default Shorts