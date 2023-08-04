import '../shorts/Shorts.css'

//hooks
import { useEffect, useState } from 'react'

//imagens
import imagePerfil from "../../assets/imagemPerfil.png"

//componentes
import ButtonSubmit from '../../components/buttonSubmit/ButtonSubmit'
import Header from '../../components/header/Header'
import CommentsComponent from '../../components/commentsComponent/CommentsComponent'

//icons
import { BiLike, BiDislike, BiCommentDetail, BiSolidLike, BiSolidDislike } from "react-icons/bi"
import { BsFillArrowUpSquareFill } from "react-icons/bs"
import { BsFillArrowDownSquareFill } from "react-icons/bs"
import { BsArrowLeftShort } from "react-icons/bs"

const Shorts = ({ videoTitle }) => {

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

    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [headerAppearing, setHeaderAppearing] = useState(window.innerWidth >= 768)

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const [startY, setStartY] = useState(0)

    const [transitioning, setTransitioning] = useState(false)

    const [openModalComments, setOpenModalComments] = useState(false)
    const [likeShort, setLikeShort] = useState(false)
    const [dislikeShort, setDislikeShort] = useState(false)

    const handleNextVideo = () => {
        if (!transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
                setTransitioning(false);
            }, 500);
        }
    };

    const handlePreviousVideo = () => {
        if (!transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
                setTransitioning(false);
            }, 500);
        }
    };

    const handleScrollUp = (event) => {
        if (event.deltaY < 0 && currentVideoIndex !== 0) {
            handlePreviousVideo()
        } else if (event.deltaY > 0 && currentVideoIndex !== videos.length - 1) {
            handleNextVideo()
        }
    }

    const handleTouchStart = (event) => {
        setStartY(event.touches[0].clientY);
        setTransitioning(false); // Adicione esta linha para evitar problemas de transição
    };

    const handleTouchMove = (event) => {
        const deltaY = event.touches[0].clientY - startY;
        if (deltaY > -50 && currentVideoIndex !== 0) {
            handlePreviousVideo();
        } else if (deltaY < 50 && currentVideoIndex !== videos.length - 1) {
            handleNextVideo();
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        setHeaderAppearing(windowWidth >= 576)
    }, [windowWidth])

    const funcOpenModalComments = () => {
        setOpenModalComments(!openModalComments)
    }

    const funcLikeShorts = () => {
        setLikeShort(!likeShort)
        setDislikeShort(false)
    }

    const funcDislikeShorts = () => {
        setDislikeShort(!dislikeShort)
        setLikeShort(false)
    }

    return (
        <div
            className='container__all__shorts'
            style={{
                minHeight: `${windowHeight}px`
            }}
            onWheel={openModalComments ? null : handleScrollUp}
            onTouchStart={openModalComments ? null : handleTouchStart}
            onTouchMove={openModalComments ? null : handleTouchMove}
        >
            {
                headerAppearing && <Header />
            }
            {
                headerAppearing && (
                    <div className='container__button__pass__shorts'>
                        <button
                            id='voltar'
                            aria-label='Botão Voltar'
                            onClick={openModalComments ? null : handlePreviousVideo}
                            style={currentVideoIndex === 0 ? { pointerEvents: 'none' } : {}}
                        >
                            <BsFillArrowUpSquareFill />
                        </button>
                        <button
                            id='proximo'
                            aria-label='Botão Próximo'
                            onClick={openModalComments ? null : handleNextVideo}
                            style={currentVideoIndex === videos.length - 1 ? { pointerEvents: 'none' } : {}}
                        >
                            <BsFillArrowDownSquareFill />
                        </button>
                    </div>
                )
            }
            <div className={`container__video ${transitioning ? 'transitioning' : ''}`}>
                <img src={videos[currentVideoIndex].image} alt='Imagem shorts' />
                <div className='header__shorts'>
                    <BsArrowLeftShort />
                    <span>Capishorts</span>
                </div>
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
                        <span>{videos[currentVideoIndex].title}</span>
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
        </div>
    )
}

export default Shorts