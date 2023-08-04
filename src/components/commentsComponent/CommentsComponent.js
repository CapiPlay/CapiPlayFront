import Comments from '../../pages/player/comments/Comments'
import '../commentsComponent/CommentsComponent.css'

//icons
import { IoMdClose, IoMdSend } from 'react-icons/io'

const CommentsComponent = ({ func }) => {

    return (
        <div className='container__comments__component'>
            <div>
                <span>Comentários</span>
                <IoMdClose onClick={func} />
            </div>
            <div>
                <Comments />
                <Comments />
                <Comments />
                <Comments />
            </div>
            <div>
                <input type="text" />
                <IoMdSend />
            </div>
        </div>
    )

}
export default CommentsComponent