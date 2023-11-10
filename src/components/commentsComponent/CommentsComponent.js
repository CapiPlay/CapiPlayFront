import '../commentsComponent/CommentsComponent.css'

//icons
import { IoMdClose, IoMdSend } from 'react-icons/io'

//components
import Comments_component from '../../pages/player/player_components/comments_componet/Comments_component'

//hooks
import { useEffect, useState } from 'react'

//service
import ComentarioService from '../../service/Engajamento/ComentarioService'

const CommentsComponent = ({ func, videoId }) => {

    const [allComments, setAllComments] = useState([]) 
    const [page, setPage] = useState(0) 
    const [answerText, setAnswerText] = useState('') 
    const [reachedEnd, setReachedEnd] = useState(false) 

    const buscarComments = async (pageNumber) => {
        try {
            const comments = await ComentarioService.buscarTodosPorVideo(videoId, pageNumber)

            if (comments.pageable.pageNumber === comments.totalPages - 1) {
                setReachedEnd(true)
            }

            setAllComments((prevComments) => [...prevComments, ...comments.content])
            setPage(pageNumber + 1)
        } catch (error) {
            console.error("")
        }
    }

    const handleScroll = () => {
        if (!reachedEnd && window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            buscarComments(page)
        }
    }

    useEffect(() => {
        if (!reachedEnd) {
            buscarComments(page)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        } 
    }, [page, reachedEnd])


    const handleNewComment = async () => {
        if (answerText.trim() !== '') {
            await ComentarioService.criar({
                texto: answerText,
                idVideo: videoId
            })
            setAnswerText('')
        }
    }

    return (
        <div className='container__comments__component'>
            <div>
                <span>Comentários</span>
                <IoMdClose onClick={func} />
            </div>
            <div>
                {
                    allComments?.map((commentVideo) => (
                        <Comments_component commentVideo={commentVideo} key={commentVideo.idComentario} />
                    ))
                }
            </div>
            <div>
                <input type="text" onChange={(e) => setAnswerText(e.target.value)} />
                <IoMdSend onClick={handleNewComment} />
            </div>
        </div>
    )

}
export default CommentsComponent