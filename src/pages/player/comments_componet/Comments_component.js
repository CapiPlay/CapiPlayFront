import React, { useState } from 'react'
import './Comments_component.css'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'

function Comments_component() {
    const [showMore, setShowMore] = useState(false);

    const comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. ";

    const toggleShowMore = () => {
        setShowMore(!showMore);
      };

  return (
    <>
    <div className='comment'>
        <div className='user__icon__container'>
            <img src='https://yt3.ggpht.com/PFRD_rpPwAIY-FC2t6Ob0GpJe2udeEaXNwug4Dx8v7zxxda6ZKHU1aKBX-XoWvYh2H4Ow6TtBDk=s176-c-k-c0x00ffffff-no-rj-mo' className='user__icon'/>
        </div>
        <div className='comment__content'>
            <p>{showMore ? comment : `${comment.slice(0, 50)}...`}</p>
            <div>
                <button onClick={() => toggleShowMore()} className='description__moreORless'>{!showMore ? <p className='selection'>Mostrar mais <p className='selection__icon'><BiSolidDownArrow/></p></p>: <p className='selection'>Mostrar menos <p className='selection__icon'><BiSolidUpArrow/></p></p>}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Comments_component