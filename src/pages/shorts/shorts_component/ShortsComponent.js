import '../Shorts.css'
import Cookies from 'js-cookie'

// hooks
import React, { useRef, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setListShorts, setActualShorts } from '../../../store/features/shorts/shortsSlice'

// icons
import { BiLike, BiDislike, BiCommentDetail, BiSolidLike, BiSolidDislike } from 'react-icons/bi'

// component
import ButtonSubmit from '../../../components/buttonSubmit/ButtonSubmit'
import CommentsComponent from '../../../components/commentsComponent/CommentsComponent'

// service
import VideoService from '../../../service/Video/VideoService'
import ReacaoService from '../../../service/Engajamento/ReacaoService'

import imagePerfil from '../../../assets/imagemPerfil.png'

const ShortsComponent = ({ short }) => {

    const [user, setUser] = useState()

    const navigate = useNavigate()
    const targetRef = useRef(null)
    const dispatch = useDispatch()
    const { id } = useParams()

    const [openModalComments, setOpenModalComments] = useState(false)
    const [likeShort, setLikeShort] = useState(false)
    const [dislikeShort, setDislikeShort] = useState(false)
    const [isVideoInView, setIsVideoInView] = useState(false)
    const [isMuted, setIsMuted] = useState(true)

    useEffect(() => {
        const jsonUser = Cookies.get("user")
        if (jsonUser !== "" && jsonUser !== undefined) {
            setUser(JSON.parse(jsonUser))
        }

        const handleBackToHomePage = () => {
            navigate("/")
        }

        window.addEventListener('popstate', handleBackToHomePage)

        return () => {
            window.removeEventListener('popstate', handleBackToHomePage)
        }

    }, [])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.95
        }

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateListShorts()
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

        const observer = new IntersectionObserver(callback, options)

        if (targetRef.current) {
            observer.observe(targetRef.current)
        }
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current)
            }
        }
    }, [id, dispatch])

    const getUUID = async () => {
        const short = await VideoService.buscarCompleto(id)
        dispatch(setActualShorts(short.data))
    }

    const updateListShorts = async () => {
        const shortUuid = short.uuid
        if (shortUuid !== id) {
            try {
                await getUUID()
                const response = await VideoService.buscarShorts()
                const newShorts = [response.data]
                dispatch(setListShorts(newShorts))
                navigate(`/shorts/${shortUuid}`)
            } catch (err) {
                console.error(err)
            }
        }
    }

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    const funcOpenModalComments = () => {
        setOpenModalComments(!openModalComments)
    }

    const validateUser = () => {
        if (user instanceof Object && user.uuid) {
            return true
        } else {
            navigate("/login")
        }
    }

    const funcLikeShorts = async () => {
        if (validateUser) {
            setLikeShort(!likeShort)
            setDislikeShort(false)
            const cmd = { idUsuario: user.uuid, idVideo: id, curtida: true }
            console.log(cmd)
            await ReacaoService.criar(cmd)
        }
    }

    const funcDislikeShorts = async () => {
        if (validateUser) {
            setDislikeShort(!dislikeShort)
            setLikeShort(false)
            await ReacaoService.criar()
        }
    }

    const getPathShorts = (currentPath) => {
        const path = `http://10.4.96.50:7000/api/video/static/${currentPath}`
        return path
    }

    return (
        <div className="container__video slide" >
            <video
                src={getPathShorts(short?.caminhos[5])}
                ref={targetRef}
                loop
                muted={isMuted}
                {...(isVideoInView && { autoPlay: true })}
            />
            <div className='container__icons__shorts'>
                <div onClick={funcLikeShorts}>
                    {likeShort ? <BiSolidLike /> : <BiLike />}
                    <span>{short?.curtidas}</span>
                </div>
                <div>
                    {dislikeShort ? <BiSolidDislike onClick={funcDislikeShorts} /> : <BiDislike onClick={funcDislikeShorts} />}
                    <BiCommentDetail onClick={funcOpenModalComments} />
                </div>
            </div>
            <div className='container__informations__video'>
                <div className='title__short'>
                    <span>{short?.titulo}</span>
                </div>
                <div className='informations__profile__shorts'>
                    <div className='profile__shorts'>
                        <img src={imagePerfil} alt='Imagem de Perfil' />
                        <span>{short?.profile}</span>
                    </div>
                    <div className='button__submit__shorts' style={openModalComments ? { display: "none" } : {}}>
                        <ButtonSubmit valiUser={validateUser} />
                    </div>
                </div>
            </div>
            {openModalComments && <CommentsComponent func={funcOpenModalComments} />}
        </div>
    )
}

export default ShortsComponent