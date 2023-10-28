import '../Shorts.css'
import Cookies from 'js-cookie'

// hooks
import React, { useRef, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
import UsuarioEngajamentoService from '../../../service/Engajamento/UsuarioEngajamentoService'

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

    const [likes, setLikes] = useState(0)
    const [currentLikes, setCurrentLikes] = useState(0)
    const [currentEngagementState, setCurrentEngagementState] = useState(0)
    const [isMinusLikes, setIsMinusLikes] = useState(false)

    const [channelPicture, setChannelPicture] = useState("")
    const [channelName, setChannelName] = useState("")

    const minimalTimeToVisualization = Math.ceil(targetRef?.current?.duration * 0.05)

    useEffect(() => {
        const jsonUser = Cookies.get("user")
        if (jsonUser !== "" && jsonUser) {
            setUser(JSON.parse(jsonUser))
        }

        const handleBackToHomePage = () => {
            navigate("/")
        }

        const findPictureAndNameChannel = async () => {
            const channel = await UsuarioEngajamentoService.buscarUm(short?.usuario.uuid)
            setChannelPicture("http://10.4.96.50:7000/api/usuario/static/" + channel?.foto)
            setChannelName(channel?.nomeCanal)
        }

        findPictureAndNameChannel()

        window.addEventListener('popstate', handleBackToHomePage)

        return () => {
            window.removeEventListener('popstate', handleBackToHomePage)
        }

    }, [])

    useEffect(() => {
        const findLike = async () => {
            const engagementLike = await ReacaoService.buscarUm(short?.uuid)

            setCurrentEngagementState(engagementLike)
            setLikeShort(engagementLike)
            setDislikeShort(!engagementLike)
            setLikes(short?.curtidas)
            setCurrentLikes(short?.curtidas)
        }
        findLike()

        setLikes(short?.curtidas)
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
        if (shortUuid !== id && shortUuid) {
            await getUUID()
            const response = await VideoService.buscarShorts()
            const list = []
            list.push(response)
            dispatch(setListShorts(list))
            navigate(`/shorts/${shortUuid}`)
        }
    }

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    const funcOpenModalComments = () => {
        setOpenModalComments(!openModalComments)
    }

    const validateUser = () => {
        if (user) {
            return true
        } else {
            navigate("/login")
        }
    }

    const updateLike = async () => {
        const takeLike = await VideoService.buscarCompleto(short?.uuid)
        console.log(takeLike)
    }

    const funcLikeShorts = async () => {
        if (!validateUser()) return
        
        
        setLikes(likes + (likeShort ? -1 : 1))
        
        setDislikeShort(false)
        setLikeShort(!likeShort)

        const cmd = { idUsuario: user.uuid, idVideo: id, curtida: true }
        await ReacaoService.criar(cmd)
        
    }

    const funcDislikeShorts = async () => {
        if (!validateUser()) return

        setLikeShort(false)
        
        setLikes(currentLikes - (currentEngagementState ? 1 : 0))
        
        setDislikeShort(!dislikeShort)

        const cmd = { idUsuario: user.uuid, idVideo: id, curtida: false }
        await ReacaoService.criar(cmd)
        
    }

    const getPathShorts = (currentPath) => {
        const path = `http://10.4.96.50:7000/api/video/static/${currentPath}`
        return path
    }

    if (!short) {
        return updateListShorts()
    }

    return (
        <div className="container__video slide" >
            <video
                src={getPathShorts(short?.caminhos[5])}
                ref={targetRef}
                loop
                muted={isMuted}
                onChange={console.log()}
                {...(isVideoInView && { autoPlay: true })}
            />
            <div className='container__icons__shorts'>
                <div onClick={funcLikeShorts}>
                    {likeShort ? <BiSolidLike /> : <BiLike />}
                    <span>{likes}</span>
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
                <div className='informations__profile__shorts' >
                    <Link to={"/profile/" + short?.usuario.uuid}>
                        <div className='profile__shorts'>
                            <img src={channelPicture} alt='Imagem de Perfil' />
                            <span>{channelName}</span>
                        </div>
                    </Link>
                    <div className='button__submit__shorts' style={openModalComments ? { display: "none" } : {}}>
                        <ButtonSubmit />
                    </div>
                </div>
            </div>
            {openModalComments && <CommentsComponent func={funcOpenModalComments} videoId={short.uuid}/>}
        </div>
    )
}

export default ShortsComponent