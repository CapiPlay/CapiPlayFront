import '../Shorts.css'

//imagens
import imagePerfil from "../../../assets/imagemPerfil.png"

//componentes
import ButtonSubmit from '../../../components/buttonSubmit/ButtonSubmit'
import CommentsComponent from '../../../components/commentsComponent/CommentsComponent'

//icons
import { BiLike, BiDislike, BiCommentDetail, BiSolidLike, BiSolidDislike } from "react-icons/bi"

//hooks
import { useState } from 'react'


const ShortsComponent = ({ short }) => {

    const videos = [
        {
            id: 1,
            title: 'Título do Vídeo 1',
            image: 'https://s2.glbimg.com/kmbgBzKPL0URISIQenPiAKo4ORI=/e.glbimg.com/og/ed/f/original/2017/08/23/5c147f01-dff6-4952-98a0-9394c88361c2.jpg',
            profile: '@user1',
            likes: '10K',
        },
        {
            id: 2,
            title: 'Título do Vídeo 2',
            image: 'https://i2.wp.com/gatinhobranco.com/wp-content/uploads/2020/04/vitrine-do-bem-gatos-Photo-by-Stratman.jpg?fit=800%2C515&ssl=1',
            profile: '@user2',
            likes: '20K',
        },
        {
            id: 3,
            title: 'Título do Vídeo 3',
            image: 'https://i0.wp.com/gatinhobranco.com/wp-content/uploads/2020/04/adotar-gatinho-lista-de-ongs-brasil-Photo-by-Pikabum.jpg?fit=800%2C515&ssl=1',
            profile: '@user3',
            likes: '30K',
        },
    ]

    //transição entre os vídeos
    // const [transitioning, setTransitioning] = useState(false)

    const [openModalComments, setOpenModalComments] = useState(false)
    const [likeShort, setLikeShort] = useState(false)
    const [dislikeShort, setDislikeShort] = useState(false)

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

    const [shorts, setShorts] = useState([])

    //abrir componente de comentários
    const funcOpenModalComments = () => {
        setOpenModalComments(!openModalComments)
    }

    //dar like no shorts
    const funcLikeShorts = () => {
        setLikeShort(!likeShort)
        setDislikeShort(false)
    }

    //dar dislike no shorts
    const funcDislikeShorts = () => {
        setDislikeShort(!dislikeShort)
        setLikeShort(false)
    }

    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    }

    // Metodos que irão para slice

    const getPathShorts = (currentPath) => {
        return "http://localhost:7000/api/video/static/" + currentPath
    }

    return (
        // <div className={`container__video ${transitioning ? 'transitioning' : ''}`}>
            <div className={`container__video`}>

            <video src={getPathShorts(short.caminhos[5])} loop autoPlay muted={isMuted} />
            {/* <button
                    onClick={toggleMute}
                    style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >teste</button>
                {isMuted ? (
                    <i className="fa fa-volume-mute" />
                ) : (
                    <i className="fa fa-volume-up" />
                )} */}
            <div className='container__icons__shorts'>
                <div onClick={funcLikeShorts}>
                    {
                        likeShort ? (
                            <BiSolidLike />
                        ) : (
                            <BiLike />
                        )
                    }
                    <span>{videos[currentVideoIndex].likes}</span>
                </div>
                <div>
                    {
                        dislikeShort ? (
                            <BiSolidDislike onClick={funcDislikeShorts} />
                        ) : (
                            <BiDislike onClick={funcDislikeShorts} />
                        )
                    }
                    <BiCommentDetail onClick={funcOpenModalComments} />
                </div>
            </div>
            <div className='container__informations__video'>
                <div className='title__short'>
                    <span>{shorts[currentVideoIndex].titulo}</span>
                </div>
                <div className='informations__profile__shorts'>
                    <div className='profile__shorts'>
                        <img src={imagePerfil} alt='Imagem de Perfil' />
                        <span>{videos[currentVideoIndex].profile}</span>
                    </div>
                    <div className='button__submit__shorts' style={openModalComments ? { display: "none" } : {}}>
                        <ButtonSubmit
                            label={'Inscrever-se'}
                            onClick={null}
                        />
                    </div>
                </div>
            </div>
            {
                openModalComments &&
                <CommentsComponent func={funcOpenModalComments} />
            }
        </div>
    )

}
export default ShortsComponent