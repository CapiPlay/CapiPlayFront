import React, { useEffect, useState } from 'react'
import './Comments_component.css'
import { BiSolidDownArrow, BiSolidUpArrow, BiDislike, BiLike, BiSolidLike } from 'react-icons/bi'
import Comments_answers_component from '../comments_answers_component/Comments_answers_component'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Comments_component(video) {
    const [showMore, setShowMore] = useState(false);
    const [like_btn, setLikeBtn] = useState(true);
    const [commentsAnswer, setCommentsAnswer] = useState(false);
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

    //são apenas variáveis de exemplo, elas vão vir com o objeto
    const comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. ";
    const username = 'ChillBean'
    const comment_date = '4'
    const user_image = 'https://yt3.ggpht.com/PFRD_rpPwAIY-FC2t6Ob0GpJe2udeEaXNwug4Dx8v7zxxda6ZKHU1aKBX-XoWvYh2H4Ow6TtBDk=s176-c-k-c0x00ffffff-no-rj-mo'
    const comment_likes = 200
    const comment_answers = [{}, {}, {}, {}, {}, {}]

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const toggleLikeBtn = () => {
        setLikeBtn(!like_btn);
    };

    const toggleCommentsAnswers = () => {
        setCommentsAnswer(!commentsAnswer);
    };

    const verifyDesktop = () => {
        if (screenSize.width < 600) {
          return false
        } else {
          return true
        }
      }

    return (
        <>
            <div className='comment'>
                <div className='user__icon__container'>
                    <img src={user_image} className='user__icon' />
                </div>
                <div className='comment__content'>
                    <div className='comment__user__username'>
                        @{username}<span className='ball'></span> há {comment_date} dias
                    </div>
                    <p>{showMore ? comment : `${comment.slice(0, 50)}...`}
                        {!showMore &&<div>
                            <button onClick={() => toggleShowMore()} className='description__moreORless'> <p className='selection'>Mostrar mais <p className='selection__icon'><BiSolidDownArrow /></p></p></button>
                        </div>}
                    </p>
                    <div className='comment__interactions'>
                        <div className='likes'>
                            {like_btn ?
                                <>
                                    <BiLike size={'1rem'} className='comment__like__btn' onClick={() => toggleLikeBtn()} />{comment_likes}
                                </>
                                :
                                <>
                                    <BiSolidLike size={'1rem'} className='comment__like__btn' onClick={() => toggleLikeBtn()} />{comment_likes}
                                </>
                            }
                        </div>
                        <div className='dislikes'>
                            <BiDislike className='comment__dislike__btn' />
                        </div>
                        {verifyDesktop() ?
                        <div className='comment__total__answers' onClick={() => toggleCommentsAnswers()}>
                            <div>({comment_answers.length}) Respostas </div>
                        </div>
                        : 
                        <div className='comment__total__answers'>
                            <div>({comment_answers.length}) Respostas </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className='comment__answers'>
                {commentsAnswer &&
                    <div>
                        <Comments_answers_component/>
                    </div>}
            </div>
        </>
    )
}

export default Comments_component