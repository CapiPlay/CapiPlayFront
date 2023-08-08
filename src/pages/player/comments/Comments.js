import React, { useState } from 'react'
import '../comments/Comments.css'
import {
    BiSolidDownArrow, BiSolidUpArrow, BiDislike, BiLike,
    BiSolidLike, BiSolidDislike
} from 'react-icons/bi'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Comments(video) {
    const [showMore, setShowMore] = useState(false);

    //são apenas variáveis de exemplo, elas vão vir com o objeto
    const comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. ";
    const username = 'ChillBean'
    const comment_date = '4'
    const user_image = 'https://yt3.ggpht.com/PFRD_rpPwAIY-FC2t6Ob0GpJe2udeEaXNwug4Dx8v7zxxda6ZKHU1aKBX-XoWvYh2H4Ow6TtBDk=s176-c-k-c0x00ffffff-no-rj-mo'
    const comment_likes = 200
    const comment_answers = []

    const [likeComments, setLikeComments] = useState(false)
    const [dislikeComments, setDislikeComments] = useState(false)

    //mostrar todo o comentário
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }

    //dar like no comentário
    const funcLikeComments = () => {
        setLikeComments(!likeComments)
        setDislikeComments(false)
    }

    //dar dislike no comentário
    const funcDislikeComments = () => {
        setDislikeComments(!dislikeComments)
        setLikeComments(false)
    }


    return (
        <div className='comment' style={showMore ?
            { animation: "open-filter .5s forwards ease" }
            : {}}>
            <div className='user__icon__container'>
                <img src={user_image} />
            </div>
            <div className='comment__content'>
                <div className='comment__text'>
                    <span className='username'>@{username} há</span>
                    <div className='ball__comments' />
                    <span className='username'>{comment_date} dias</span>
                </div>
                <div>
                    <p>
                        {
                            showMore ? comment : `${comment.slice(0, 50)}...`
                        }
                    </p>
                    <div>
                        <button onClick={() => toggleShowMore()} className='description__moreORless'>
                            {
                                !showMore ? (
                                    <div className='selection__more'>
                                        <p>
                                            Mostrar mais
                                        </p>
                                        <BiSolidDownArrow />
                                    </div>
                                ) : (
                                    <div className='selection__more'>
                                        <p>
                                            Mostrar menos
                                        </p>
                                        <BiSolidUpArrow />
                                    </div>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className='comment__interactions'>
                    <div onClick={funcLikeComments}>
                        {
                            likeComments ? (
                                <BiSolidLike />
                            ) :
                                (
                                    <BiLike />
                                )
                        }
                        <p>{comment_likes}</p>
                    </div>
                    {
                        dislikeComments ? (
                            <BiSolidDislike onClick={funcDislikeComments} />
                        ) : (

                            <BiDislike onClick={funcDislikeComments} />
                        )
                    }
                    <p>(5) Respostas</p>
                </div>
            </div>
        </div >
    )
}
export default Comments