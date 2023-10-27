import { useEffect } from 'react'
import Comments from '../../pages/player/player_components/comments_componet/Comments_component'
import '../commentsComponent/CommentsComponent.css'

//icons
import { IoMdClose, IoMdSend } from 'react-icons/io'

const CommentsComponent = ({ func }) => {

    // const [allComments, setAllComments] = useState([])

    // const buscarComments = async () => {
    //     var commentsTemp = await ComentarioService.buscarTodosPorVideo(video.uuid, page)
    //     setPage(page + 1)
    //     if(commentsTemp.content == null || commentsTemp.content == undefined){
    //         setAllComments(null)
    //     }else{
    //         setLast(commentsTemp.last)
    //         if(commentsTemp.content !== null || commentsTemp.content !== undefined){
    //             setAllComments(commentsTemp.content)
    //         }
    //     }
    // }

    // useEffect(() => {
    //     buscarComments()
    // }, [])

    // useEffect(() => {
    //     console.log(allComments)
    // }, [allComments])

    return (
        <div className='container__comments__component'>
            <div>
                <span>Comentários</span>
                <IoMdClose onClick={func} />
            </div>
            <div>
                {/* <Comments /> */}
            </div>
            <div>
                <input type="text" />
                <IoMdSend />
            </div>
        </div>
    )

}
export default CommentsComponent