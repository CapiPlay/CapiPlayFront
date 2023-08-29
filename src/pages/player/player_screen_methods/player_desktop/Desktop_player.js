import React, { useEffect, useState } from 'react'
import './Desktop_player.css'
import Like from '../../player_components/like_btn/Like_btn'
import Dislike from '../../player_components/dislike_btn/Dislike_btn'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import Channel_component from '../../player_components/channel_component/Channel_component'
import Description_component from '../../player_components/description_component/Description_component'
import Divider_component from '../../player_components/divider_component/Divider_component'
import Comments_component from '../../player_components/comments_componet/Comments_component'
import Video_card from '../../../../components/video_card/Video_card'
import Header from '../../../../components/header/Header'
import PlayerService from '../../../../service/PlayerService'
// import Video_player_contructor from '../../video_player_contructor/Video_player_contructor'

function Desktop_player({ video }) {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos()
    }, [])



    const getVideos = async () => {
        setVideos(await PlayerService.buscarVideosHomeReu(0))
    }

    return (
        <><Header></Header>
            <div className='space'></div>
            <div className='things'>
                <div>
                    <div className='video__container'>
                        <video
                            src={"http://localhost:7000/api/video/static/" + video.caminhos[5]}
                            type="video/mp4"
                            className='video__player__desktop'
                            poster={"http://localhost:7000/api/video/static/" + video.caminhos[3]}
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
                                <AiFillEye size={'1.3rem'} /> {video.curtidas} Visualizações
                            </div>
                            <div className='likes__div'>
                                <AiFillHeart size={'1.25rem'} /> {video.visualizacoes} Likes
                            </div>
                        </div>
                        <div className='like__dislike__btns'>
                            <Like video={video} />
                            <Dislike video={video} />
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
                <div className='videos__desktop'>
                    {videos.map((video) => (
                        <Video_card key={video.uuid} video={video} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Desktop_player