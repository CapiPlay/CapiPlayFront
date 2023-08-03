import React, { useEffect, useState, useRef } from 'react'
import './Mobile_player.css'
import Like from '../../player_components/like_btn/Like_btn'
import Dislike from '../../player_components/dislike_btn/Dislike_btn'
import { AiFillEye, AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import pingu from '../../../../assets/image/pingu.mp4'
import Channel_component from '../../player_components/channel_component/Channel_component'
import Description_component from '../../player_components/description_component/Description_component'
import Divider_component from '../../player_components/divider_component/Divider_component'
import Comments_component from '../../player_components/comments_componet/Comments_component'
import Video_card from '../../../../components/video_card/Video_card'
import { BiArrowBack } from 'react-icons/bi'
import {VscSend} from 'react-icons/vsc'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Mobile_player(video) {

    const [showComments, setShowComments] = useState(false);

    const handleShowComments = () => {
        setShowComments(true);
    };

    const handleCloseComments = () => {
        setShowComments(false);
    };

    //são apenas variáveis de exemplo, elas vão vir com o objeto 
    const video_title_var = 'Pingu.'
    const video_views_var = '57k'
    const video_likes_var = '57k'

    return (
        <>
            {!showComments && <div className='return__btn'><BiArrowBack color='var(--lightpurple)' />Voltar</div>}
            
            <video controls className='video__player__mobile'>
                <source src={pingu} type="video/mp4" />
            </video>
            {!showComments && <>
                <div className='video__title'>
                    <p>{video_title_var}</p>
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
                <div className='comments__container__mobile' onClick={() => handleShowComments()}>
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

                <div>
                    <div className='video__card'>
                        <Video_card video={video} />
                    </div>
                    <div className='video__card'>
                        <Video_card video={video} />
                    </div>
                </div>
            </>
            }
            {showComments &&
                <div className='comments__modal'>
                    <div className='close__comments'><p>Comentários</p><p onClick={() => handleCloseComments()}><AiOutlineClose /></p></div>
                    <div className='comments__scroll__modal'>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                        <div><Comments_component /></div>
                    </div>
                    <div className='comments__input__container'><input className='comments__input' placeholder='Escreva um comentário'/><VscSend className='send__icon'/></div>
                </div>
            }
        </>
    )
}

export default Mobile_player