import React, { useState } from 'react'
import './Comments.css'
import { BiSolidDownArrow, BiSolidUpArrow, BiDislike, BiLike } from 'react-icons/bi'

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

    const toggleShowMore = () => {
        setShowMore(!showMore);
      };

  return (
    <>
    <div className='comment'>
        <div className='user__icon__container'>
            <img src={user_image} className='user__icon'/>
        </div>
        <div className='comment__content'>
            <div className='comment__user__username'>
                @{username}<span className='ball'></span> há {comment_date} dias
            </div>
            <p>{showMore ? comment : `${comment.slice(0, 50)}...`}
            <div>
                <button onClick={() => toggleShowMore()} className='description__moreORless'>{!showMore ? <p className='selection'>Mostrar mais <p className='selection__icon'><BiSolidDownArrow/></p></p>: <p className='selection'>Mostrar menos <p className='selection__icon'><BiSolidUpArrow/></p></p>}</button>
            </div>
            </p>
            <div className='comment__interactions'>
                <div className='likes'>
                    <BiLike size={'1rem'}/>{comment_likes}
                </div>
                <div className='dislikes'>
                    <BiDislike/>
                </div>
                <div className='answers'>
                    (5) Respostas
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Comments