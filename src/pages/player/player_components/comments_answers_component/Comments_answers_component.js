import React, { useState } from 'react'
import './Comments_answers_component.css'
import { BiSolidDownArrow, BiSolidUpArrow, BiDislike, BiLike, BiSolidLike } from 'react-icons/bi'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Comments_answers_component(video) {
    const [showMore, setShowMore] = useState(false);
    const [like_btn, setLikeBtn] = useState(true);
    const [commentsAnswer, setCommentsAnswer] = useState(false);

    //são apenas variáveis de exemplo, elas vão vir com o objeto
    const comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. ";
    const username = 'ChillBean'
    const comment_date = '4'
    const user_image = 'https://steamuserimages-a.akamaihd.net/ugc/1982175219714100763/A4498FCF170B98665E37618B6473EB613B40B0B9/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
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
                        <div>
                            <button onClick={() => toggleShowMore()} className='description__moreORless'>{!showMore ? <p className='selection'>Mostrar mais <p className='selection__icon'><BiSolidDownArrow /></p></p> : <p className='selection'>Mostrar menos <p className='selection__icon'><BiSolidUpArrow /></p></p>}</button>
                        </div>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments_answers_component