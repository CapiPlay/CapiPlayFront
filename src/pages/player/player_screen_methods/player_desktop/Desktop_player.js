import React, { useEffect } from 'react'
import './Desktop_player.css'
import Like from '../../player_components/like_btn/Like_btn'
import Dislike from '../../player_components/dislike_btn/Dislike_btn'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import pingu from '../../../../assets/image/pingu.mp4'
import Channel_component from '../../player_components/channel_component/Channel_component'
import Description_component from '../../player_components/description_component/Description_component'
import Divider_component from '../../player_components/divider_component/Divider_component'
import Comments_component from '../../player_components/comments_componet/Comments_component'
import Video_card from '../../../../components/video_card/Video_card'
import Header from '../../../../components/header/Header'
import EngajamentoService from '../../../../service/EngajamentoService'
import PlayerService from '../../../../service/PlayerService'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Desktop_player({video}) {
    // const videoReactions = EngajamentoService.buscarTodasReacoesPorVideo(video.uuid)
    //são apenas variáveis de exemplo, elas vão vir com o objeto 
    
    const video_views_var = '57k'
    const video_likes_var = '57k' //videoReactions.size
    let video_var;

    useEffect(() => {
        video_var = PlayerService.buscarVideo(video.caminhos[5])
    }, [])

    return (
        <><Header></Header>
        <div className='space'></div>
            <div className='things'>
                <div>
                    <div>
                        <video controls className='video__player__desktop'>
                            <source src={video_var} type="video/mp4" />
                        </video>
                    </div>
                    <div className='video__title'>
                        <p>{video.titulo}</p>
                    </div>
                    <div className='interaction'>
                        <div className='interaction__info'>
                            <div className='views__div'>
                                <AiFillEye size={'1.3rem'} /> {video_views_var} de Visualizações
                            </div>
                            <div className='likes__div'>
                                <AiFillHeart size={'1.25rem'} /> {video_likes_var} de Likes
                            </div>
                        </div>
                        <div className='like__dislike__btns'>
                            <Like video={video}/>
                            <Dislike video={video}/>
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
                        </div>
                        <div className='comments'>
                            <div>
                                <Comments_component video={video} />
                            </div>
                            <div>
                                <Comments_component video={video} />
                            </div>
                            <div>
                                <Comments_component video={video} />
                            </div>
                            <div>
                                <Comments_component video={video} />
                            </div>
                            <div>
                                <Comments_component video={video} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='video__card'>
                        <Video_card video={video} />
                    </div>
                    <div className='video__card'>
                        <Video_card video={video} />
                    </div>
                    <div className='video__card'>
                        <Video_card video={video} />
                    </div>
                    <div className='video__card'>
                        <Video_card video={video} />
                    </div>
                    <div className='video__card'>
                        <Video_card video={video} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Desktop_player