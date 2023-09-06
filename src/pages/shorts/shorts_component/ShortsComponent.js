import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setListShorts, setActualShorts } from '../../../store/features/shorts/shortsSlice'
import { useNavigate, useParams } from 'react-router-dom'
import VideoService from '../../../service/Video/VideoService'
import { BiLike, BiDislike, BiCommentDetail, BiSolidLike, BiSolidDislike } from 'react-icons/bi'
import imagePerfil from '../../../assets/imagemPerfil.png'
import ButtonSubmit from '../../../components/buttonSubmit/ButtonSubmit'
import CommentsComponent from '../../../components/commentsComponent/CommentsComponent'
import '../Shorts.css'
import ReacaoService from '../../../service/Engajamento/ReacaoService'

const ShortsComponent = ({ short }) => {

    const navigate = useNavigate()
    const targetRef = useRef(null)
    const dispatch = useDispatch()

    console.log(short)

    const { id } = useParams()

    const [openModalComments, setOpenModalComments] = useState(false)
    const [likeShort, setLikeShort] = useState(false)
    const [dislikeShort, setDislikeShort] = useState(false)
    const [isVideoInView, setIsVideoInView] = useState(false)
    const [isMuted, setIsMuted] = useState(true)

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

    const updateListShorts = async() => {
        const shortUuid = short.uuid
        if (shortUuid !== id) {
            try {
                await getUUID()
                const newShort = await VideoService.buscarShorts()
                const newShortsList = [newShort.data]
                dispatch(setListShorts(newShortsList))
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

    const funcLikeShorts = async() => {
        setLikeShort(!likeShort)
        setDislikeShort(false)
        await ReacaoService.criar()
    }

    const funcDislikeShorts = async () => {
        setDislikeShort(!dislikeShort)
        setLikeShort(false)
        await ReacaoService.criar()
    }

    const getPathShorts = (currentPath) => {
        const path = `http://10.4.96.50:7000/api/video/static/${currentPath}`
        return path
    }

    return (
        <div className="container__video slide" >
            <video src={getPathShorts(short?.caminhos[5])} ref={targetRef} loop muted={isMuted} {...(isVideoInView && { autoPlay: true })} />

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
                        <ButtonSubmit label={'Inscrever-se'} onClick={null} />
                    </div>
                </div>
            </div>
            {openModalComments && <CommentsComponent func={funcOpenModalComments} />}
        </div>
    )
}

export default ShortsComponent
