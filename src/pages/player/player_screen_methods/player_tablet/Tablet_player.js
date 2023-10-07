import React, { useEffect, useState } from 'react'
import './Tablet_player.css'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import Channel_component from '../../player_components/channel_component/Channel_component'
import Description_component from '../../player_components/description_component/Description_component'
import Divider_component from '../../player_components/divider_component/Divider_component'
import Comments_component from '../../player_components/comments_componet/Comments_component'
import Video_card from '../../../../components/video_card/Video_card'
import { BiArrowBack } from 'react-icons/bi'
import VideoService from '../../../../service/Video/VideoService'
import ComentarioService from '../../../../service/Engajamento/ComentarioService'
import { IoMdSend } from 'react-icons/io'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import LikeDislikeButtons from '../../player_components/feedbackButton/LikeDislikeButtons'
import { useNavigate } from 'react-router-dom'
import notFound from '../../../../assets/image/404_NotFound.png'

function Tablet_player({ video }) {
    const [videos, setVideos] = useState([])
    const [commentText, setCommentText] = useState('');
    const [allComments, setAllComments] = useState([])
    const [comment, setComments] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        buscarComments()
        getVideos()
    }, [])

    const getVideos = async () => {
        var videostemp = await VideoService.buscarTodos(6, 0, false)
        setVideos(videostemp.content)

    }

    const handleNewComment = () => {
        console.log(video)
        if (commentText.trim() !== '') {
            ComentarioService.criar({
                texto: commentText,
                idVideo: video.uuid
            })
            setCommentText('');
        }
    }

    const buscarComments = async () => {
        var commentsTemp = await ComentarioService.buscarTodosPorVideo(video.uuid, 0)
        if (commentsTemp == null || commentsTemp == undefined) {
            setAllComments(null)
        } else {
            setAllComments(commentsTemp.content)
        }
    }

    const toggleComment = () => {
        setComments(!comment)
    }

    const goBack = () => {
        navigate('/')
    }

    return (
        <><div className='return__btn' onClick={goBack}><BiArrowBack color='var(--lightpurple)' />Voltar</div>
            <div>
                <video controls className='video__player__tablet' poster={"http://10.4.96.50:7000/api/video/static/" + video.caminhos[3]} key={video.uuid}>
                    <source src={"http://10.4.96.50:7000/api/video/static/" + video.caminhos[5]} type="video/mp4" />
                </video>
            </div>
            <div className='video__title'>
                <p>{video.titulo}</p>
            </div>
            <div className='interaction'>
                <div className='interaction__info'>
                    <div className='views__div'>
                        <AiFillEye size={'1.3rem'} /> {video.visualizacoes} de Visualizações
                    </div>
                    <div className='likes__div'>
                        <AiFillHeart size={'1.25rem'} /> {video.curtidas} de Likes
                    </div>
                </div>
                <div className='like__dislike__btns'>
                    <LikeDislikeButtons video={video} />
                </div>
            </div>
            <div>
                <Channel_component video={video} />
            </div>
            <div>
                <Description_component video={video} />
            </div>
            <div>
                <Divider_component />
            </div>
            <div className='comments__container'>
                <div className='total__comments'>
                    <p>Comentários</p>
                    <div className='toggleComment' onClick={toggleComment}>
                        Comentar
                        {comment ?
                            <BiSolidUpArrow /> :
                            <BiSolidDownArrow />
                        }
                    </div>
                </div>
                {comment &&
                    <div className='comments__input'>
                        <input
                            type='text'
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                        <div className='send__comments__icon' onClick={handleNewComment}>
                            <IoMdSend size={'2rem'} />
                        </div>
                    </div>
                }
                <div className='comments'>
                    <div>
                        {allComments.length === 0?
                                    <div className='no__comments'>
                                        <div>
                                            <p>Sem comentarios</p>
                                            <br/>
                                            <div className='no__comments__image'>
                                                <img src={notFound} alt='notFound' width={50}/>
                                            </div>
                                        </div>
                                    </div>
                                :
                                <>
                                    <div>
                                        {allComments.map((commentVideo) => (
                                             <Comments_component commentVideo={commentVideo} key={commentVideo.idComentario}/>
                                        ))}
                                    </div>
                                </>
                                }
                    </div>
                </div>
            </div>
            <div>
                <Divider_component />
            </div>
            <div className='videos__tablet__container'>
                <div className='videos__tablet'>
                    {videos.map((video) => (
                        <Video_card key={video.uuid} video={video} />
                    ))}
                </div>
            </div></>
    )
}

export default Tablet_player