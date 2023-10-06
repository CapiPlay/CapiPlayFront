import React, { useEffect, useState, useRef } from 'react'
import './Mobile_player.css'
import { AiFillEye, AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import Channel_component from '../../player_components/channel_component/Channel_component'
import Description_component from '../../player_components/description_component/Description_component'
import Divider_component from '../../player_components/divider_component/Divider_component'
import Comments_component from '../../player_components/comments_componet/Comments_component'
import Video_card from '../../../../components/video_card/Video_card'
import { BiArrowBack } from 'react-icons/bi'
import { VscSend } from 'react-icons/vsc'
import VideoService from '../../../../service/Video/VideoService'
import LikeDislikeButtons from '../../player_components/feedbackButton/LikeDislikeButtons'
import ComentarioService from '../../../../service/Engajamento/ComentarioService'
import { useNavigate } from 'react-router-dom'

function Mobile_player({ video }) {

    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [allComments, setAllComments] = useState()
    const navigate = useNavigate()

    const handleShowComments = () => {
        setShowComments(true);
    };

    const handleCloseComments = () => {
        setShowComments(false);
    };

    const [videos, setVideos] = useState([])

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

    const goBack = () => {
        console.log('aaa')
        navigate('/')
    }

    return (
        <>
            {!showComments && <div className='return__btn' onClick={goBack}><BiArrowBack color='var(--lightpurple)' />Voltar</div>}

            <video controls className='video__player__mobile' poster={"http://10.4.96.50:7000/api/video/static/" + video.caminhos[3]} key={video.uuid}>
                <source src={"http://10.4.96.50:7000/api/video/static/" + video.caminhos[5]} type="video/mp4" />
            </video>
            {!showComments && <>
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
                <div className='comments__container__mobile' onClick={() => handleShowComments()}>
                    <div className='total__comments'>
                        <p>Comentários</p>
                    </div>
                </div>
                {allComments == null ?
                    <div>
                        <p>Sem comentarios</p>
                    </div>
                    :
                    <div className='comentarios__video'>
                        {allComments.map((commentVideo) => (
                            <Comments_component commentVideo={commentVideo} key={commentText.idComentario}/>
                        ))}
                    </div>
                }
                <div>
                    <Divider_component />
                </div>

                <div className='videos__mobile'>
                    {videos.map((video) => (
                        <Video_card key={video.uuid} video={video} />
                    ))}
                </div>
            </>
            }
            {showComments &&
                <div className='comments__modal'>
                    <div className='close__comments'>
                        <p>Comentários</p>
                        <p onClick={() => handleCloseComments()}>
                            <AiOutlineClose /></p>
                    </div>
                    <div className='comments__scroll__modal'>
                        {allComments == null ?
                            <div>
                                <p>Sem comentarios</p>
                            </div>
                            :
                            <div>
                                {allComments.map((commentVideo) => (
                                    <Comments_component commentVideo={commentVideo} key={commentText.idComentario}/>
                                ))}
                            </div>
                        }
                    </div>
                    <div className='comments__input__mobile__container'>
                        <input
                            className='comments__input__mobile'
                            placeholder='Escreva um comentário'
                            type='text'
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        /><VscSend className='send__icon' onClick={handleNewComment} />
                    </div>
                </div>
            }
        </>
    )
}

export default Mobile_player