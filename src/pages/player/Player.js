import React, { useEffect, useState } from 'react'
import Like from './like_btn/Like_btn'
import Dislike from './dislike_btn/Dislike_btn'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import pingu from '../../assets/image/pingu.mp4'
import './Player.css'
import Channel_component from './channel_component/Channel_component'
import Description_component from './description_component/Description_component'
import Divider_component from './divider_component/Divider_component'
import Comments_component from './comments_componet/Comments_component'
import Video_card from '../../components/video_card/Video_card'
import { BiArrowBack } from 'react-icons/bi'
import Header from '../../components/header/Header'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Player(video) {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const verifyScreen = () => {
    if (screenSize.width > 900) {
      return false
    } else {
      return true
    }
  }


  //são apenas variáveis de exemplo, elas vão vir com o objeto 
  const video_title_var = 'Pingu.'
  const video_views_var = '57k'
  const video_likes_var = '57k'

  return (
    <>
      {verifyScreen() ?
        <div>
          <div className='return__btn'><BiArrowBack color='var(--lightpurple)' />Voltar</div>
          <div>
            <video controls className='video__player'>
              <source src={pingu} type="video/mp4" />
            </video>
          </div>
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
            <Channel_component />
          </div>
          <div>
            <Description_component />
          </div>
          <div>
            <Divider_component />
          </div>
          <div className='comments__container'>
            <div className='total__comments'>
              <p>Comentários</p>
            </div>
            <div>
              <Comments_component />
            </div>
          </div>
          <div>
            <Divider_component />
          </div>
          <div>
            <div className='video__card'>
              <Video_card />
            </div>
            <div className='video__card'>
              <Video_card />
            </div>
          </div>
        </div>

        :

        <div>
          <Header></Header>
          <div className='things'>
            <div>
              <div>
                <video controls className='video__player'>
                  <source src={pingu} type="video/mp4" />
                </video>
              </div>
              <div className='video__title'>
                <p>Pingu.</p>
              </div>
              <div className='interaction'>
                <div className='interaction__info'>
                  <div className='views__div'>
                    <AiFillEye size={'1.3rem'} /> 57k de Visualizações
                  </div>
                  <div className='likes__div'>
                    <AiFillHeart size={'1.25rem'} /> 57k de Likes
                  </div>
                </div>
                <div className='like__dislike__btns'>
                  <Like />
                  <Dislike />
                </div>
              </div>
              <div>
                <Channel_component />
              </div>
              <div>
                <Description_component />
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
                    <Comments_component />
                  </div>
                  <div>
                    <Comments_component />
                  </div>
                  <div>
                    <Comments_component />
                  </div>
                  <div>
                    <Comments_component />
                  </div>
                  <div>
                    <Comments_component />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='video__card'>
                <Video_card />
              </div>
              <div className='video__card'>
                <Video_card />
              </div>
              <div className='video__card'>
                <Video_card />
              </div>
              <div className='video__card'>
                <Video_card />
              </div>
              <div className='video__card'>
                <Video_card />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Player