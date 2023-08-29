import '../Shorts.css'

//imagens
import imagePerfil from "../../../assets/imagemPerfil.png"

//componentes
import ButtonSubmit from '../../../components/buttonSubmit/ButtonSubmit'
import CommentsComponent from '../../../components/commentsComponent/CommentsComponent'

//icons
import { BiLike, BiDislike, BiCommentDetail, BiSolidLike, BiSolidDislike } from "react-icons/bi"

//hooks
import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setListShorts, setActualShorts } from "../../../store/features/shorts/shortsSlice"
import { useNavigate, useParams } from 'react-router-dom'
import ShortsService from '../../../service/ShortsService'

const ShortsComponent = ({ short }) => {

    const navigate = useNavigate()
    const targetRef = useRef(null)
    const dispatch = useDispatch()
    const shorts = useSelector((state) => state.shorts.listShorts)

    console.log("Shorts: " + short)

    const { id } = useParams()

    const [openModalComments, setOpenModalComments] = useState(false)
    const [likeShort, setLikeShort] = useState(false)
    const [dislikeShort, setDislikeShort] = useState(false)
    const [isVideoInView, setIsVideoInView] = useState(false)

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

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

    const [isMuted, setIsMuted] = useState(true)

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1
        }

        const getUUID = async () => {
            const short = await ShortsService.buscarUUID(id)
            console.log(short)
            dispatch(setActualShorts(short))
        }

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    const shortUuid = short.uuid
                    if (shortUuid !== id) {
                        getUUID()
                        dispatch(setListShorts(short.uuid, null, shorts))
                        navigate(`/shorts/${shortUuid}`)
                    }

                    setIsVideoInView(true)
                    setTimeout(() => {
                        entry.target.play()
                    }, 500)
                } else {
                    setIsVideoInView(false)
                    entry.target.pause()
                }
            })
        }

        console.log(short)

        const observer = new IntersectionObserver(callback, options)

        if (targetRef.current) {
            observer.observe(targetRef.current)
        }
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current)
            }
        }
    }, [])

    // Metodos que irão para slice

    const getPathShorts = (currentPath) => {
        const path = "http://localhost:7000/api/video/static/" + currentPath
        return path
    }

    return (
        <div className={`container__video slide`} >
            <video src={getPathShorts(short?.caminhos[5])} ref={targetRef} loop muted={isMuted} {...(isVideoInView && { autoPlay: true })} />

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
                    <span>32K</span>
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
                    <span>{short.titulo}</span>
                </div>
                <div className='informations__profile__shorts'>
                    <div className='profile__shorts'>
                        <img src={imagePerfil} alt='Imagem de Perfil' />
                        <span>{short.profile}</span>
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