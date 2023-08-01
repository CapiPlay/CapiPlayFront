import Comments from '../../pages/player/comments/Comments'
import '../commentsComponent/CommentsComponent.css'

//icons
import { IoMdClose } from 'react-icons/io'

const CommentsComponent = () => {

    return (
        <div className='container__comments__component'>
            <div>
                <span>Comentários</span>
                <IoMdClose color="var(--white)" />
            </div>
            <div>
                <Comments />
            </div>
        </div>
    )

}
export default CommentsComponent