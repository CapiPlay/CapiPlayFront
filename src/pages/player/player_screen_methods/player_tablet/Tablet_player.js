import React, { useEffect, useState } from 'react'
import './Tablet_player.css'
import Like from '../../player_components/like_btn/Like_btn'
import Dislike from '../../player_components/dislike_btn/Dislike_btn'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import Channel_component from '../../player_components/channel_component/Channel_component'
import Description_component from '../../player_components/description_component/Description_component'
import Divider_component from '../../player_components/divider_component/Divider_component'
import Comments_component from '../../player_components/comments_componet/Comments_component'
import Video_card from '../../../../components/video_card/Video_card'
import { BiArrowBack } from 'react-icons/bi'
import PlayerService from '../../../../service/PlayerService'

function Tablet_player({ video }) {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        setVideos(await PlayerService.buscarVideosHome(0))
    }

    return (
        <><div className='return__btn'><BiArrowBack color='var(--lightpurple)' />Voltar</div>
            <div>
                <video controls className='video__player__tablet' poster={"http://localhost:7000/api/video/static/" + video.caminhos[3]} key={video.uuid}>
                    <source src={"http://localhost:7000/api/video/static/" + video.caminhos[5]} type="video/mp4" />
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
                    <Like />
                    <Dislike />
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
                <div>
                    <Comments_component video={video} />
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