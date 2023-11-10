import React, { useEffect, useState } from 'react'
import './Desktop_player.css'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import Channel_component from '../../player_components/channel_component/Channel_component'
import Description_component from '../../player_components/description_component/Description_component'
import Divider_component from '../../player_components/divider_component/Divider_component'
import Comments_component from '../../player_components/comments_componet/Comments_component'
import Video_card from '../../../../components/video_card/Video_card'
import Header from '../../../../components/header/Header'
import VideoService from '../../../../service/Video/VideoService'
import { IoMdSend } from 'react-icons/io'
import {BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi'
import ComentarioService from '../../../../service/Engajamento/ComentarioService'
import notFound from '../../../../assets/image/404_NotFound.png'
import LikeDislikeButtons from '../../player_components/feedbackButton/LikeDislikeButtons'
import UsuarioEngajamentoService from '../../../../service/Engajamento/UsuarioEngajamentoService'; 

// import Video_player_contructor from '../../video_player_contructor/Video_player_contructor'

function Desktop_player({ video }) {
    const [videos, setVideos] = useState([])
    const [comment, setComments] = useState(false)
    const [commentText, setCommentText] = useState('');
    let [allComments, setAllComments] = useState([])
    const [last, setLast] = useState(true) 
    const [page, setPage] = useState(0)
    const [usuario, setUsuario] = useState({});


    useEffect(() => {
        UsuarioEngajamentoService.buscarUm(video.usuario.uuid)
            .then((data) => setUsuario(data))
            .catch((error) => console.error('Erro ao buscar usuario:', error));
    }, [video]);

    useEffect( () => {
        buscarComments()
        getVideos()
    }, [])

    const toggleComment = () => {
        setComments(!comment)
    }

    const getVideos = async () => {
        var videostemp = await VideoService.buscarTodos(6, 0, false)
        setVideos(videostemp.content)

    }

    const handleNewComment = async () => {
        if (commentText.trim() !== '') {
            let teste = await ComentarioService.criar({
                texto: commentText,
                idVideo: video.uuid
            })
            allComments.push(teste)
            setCommentText('');
        }
        setComments(!comment)
    }

    const buscarComments = async () => {
        var commentsTemp = await ComentarioService.buscarTodosPorVideo(video.uuid, page)
        setPage(page + 1)
        if(commentsTemp.content == null || commentsTemp.content == undefined){
            setAllComments(null)
        }else{
            setLast(commentsTemp.last)
            if(commentsTemp.content !== null || commentsTemp.content !== undefined){
                setAllComments(commentsTemp.content)
            }
        }
    }

    const buscarMaisComentarios = async () => {
        var commentsTemp = await ComentarioService.buscarTodosPorVideo(video.uuid, page)
        if(commentsTemp.content == null || commentsTemp.content == undefined){
            setAllComments(null)
        }else{
            setPage(page + 1)
            allComments.push(...commentsTemp.content)
            setLast(commentsTemp.last)
            setAllComments(allComments)
        }
    }

    return (
        <><Header></Header>
            <div className='space'></div>
            <div className='things'>
                <div>
                    <div className='video__container'>
                        <video
                            src={"http://10.4.96.50:7000/api/video/static/" + video.caminhos[5]}
                            type="video/mp4"
                            className='video__player__desktop'
                            poster={"http://10.4.96.50:7000/api/video/static/" + video.caminhos[3]}
                            key={video.uuid}
                            controls
                        />
                    </div>
                    {/* <div>
                        <Video_player_contructor video={video}/>
                    </div> */}
                    <div className='video__title'>
                        <p>{video.titulo}</p>
                    </div>
                    <div className='interaction'>
                        <div className='interaction__info'>
                            <div className='views__div'>
                                <AiFillEye size={'1.3rem'} /> {video.visualizacoes} Visualizações
                            </div>
                            <div className='likes__div'>
                                <AiFillHeart size={'1.25rem'} /> {video.curtidas} Likes
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
                                { comment ?
                                    <BiSolidUpArrow/>:
                                    <BiSolidDownArrow/>
                                }
                            </div>
                        </div>
                        { comment &&
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
                                    {!last && <div onClick={buscarMaisComentarios} className='show__more__comments'>Mostrar mais <BiSolidDownArrow size={'1rem'}/></div>}
                                </>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='videos__desktop'>
                    {videos.map((video) => (
                         <Video_card key={video.uuid} video={video}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Desktop_player