import React, { useEffect, useState } from 'react'
import './Comments_component.css'
import { BiSolidDownArrow, BiSolidUpArrow, BiDislike, BiLike, BiSolidLike } from 'react-icons/bi'
import Comments_answers_component from '../comments_answers_component/Comments_answers_component'
import UsuarioService from '../../../../service/Usuario/UsuarioService'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Comments_component({ commentVideo }) {
    const [showMore, setShowMore] = useState(false);
    const [like_btn, setLikeBtn] = useState(true);
    const [commentsAnswer, setCommentsAnswer] = useState(false);
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [date, setDate] = useState();
    const [formatoHora, setFormatoHora] = useState()

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

    useEffect(() => {
        setDateComment()
    }, [date])

    const comment_date = '4'
    const user_image = 'https://yt3.ggpht.com/PFRD_rpPwAIY-FC2t6Ob0GpJe2udeEaXNwug4Dx8v7zxxda6ZKHU1aKBX-XoWvYh2H4Ow6TtBDk=s176-c-k-c0x00ffffff-no-rj-mo'
    const comment_likes = 200

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const toggleLikeBtn = () => {
        // if(like_btn){
        //     EngajamentoService.criar(
        //         {
        //             usuarioId: 1, // usuarioId
        //             videoId: video.uuid,
        //             curtida: 1
        //         }
        //     )
        // }else{
        //     EngajamentoService.criar(
        //         {
        //             usuarioId: 1, // usuarioId
        //             videoId: video.uuid,
        //             curtida: 0
        //         }
        //     )
        // }
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

    const setDateComment = () => {
        const dataHoraJSON = commentVideo.dataHora;
        const dataHoraObj = new Date(dataHoraJSON);
        const dataHoraAtual = new Date();
        const diferencaEmMilissegundos = dataHoraAtual - dataHoraObj;
        const diferencaEmSegundos = Math.floor(diferencaEmMilissegundos / 1000)
        const diferencaEmMinutos = Math.floor(diferencaEmMilissegundos / (1000 * 60));
        const diferencaEmHoras = Math.floor(diferencaEmMinutos / 60)
        const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
        if(diferencaEmDias > 0){
            if(diferencaEmDias == 1){
                setFormatoHora("dia")
            }else{
                setFormatoHora("dias")
            }
        }else if(diferencaEmHoras > 0) {
            if(diferencaEmHoras == 1){
                setFormatoHora("hora")
            }else{
                setFormatoHora("horas")
            }
            setDate(diferencaEmHoras)
        } else if(diferencaEmMinutos > 0){
            if(diferencaEmMinutos == 1){
                setFormatoHora("minuto")
            }else{
                setFormatoHora("minutos")
            }
            setDate(diferencaEmMinutos)
        } else{
            if(diferencaEmSegundos == 1){
                setFormatoHora("segundo")
            }else{
                setFormatoHora("segundos")
            }
            setDate(diferencaEmSegundos)
        }
    }

    return (
        <>
            <div className='comment'>
                <div className='user__icon__container'>
                    <img src={user_image} className='user__icon' />
                </div>
                <div className='comment__content'>
                    <div className='comment__user__username' >
                        @{commentVideo.idUsuario.nomeCanal}<span className='ball'></span><p key={date}> há {date} {formatoHora}</p>
                    </div>
                    <p className='comment__text'>{showMore ? commentVideo.texto : `${commentVideo.texto.slice(0, 50)}...`}
                        {!showMore && <div>
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
                                {commentVideo.qtdRespostas == 0 ?
                                    <div></div>
                                    :
                                    <div>({commentVideo.qtdRespostas}) Respostas </div>
                                }
                            </div>
                            :
                            <div className='comment__total__answers'>
                                <div>({commentVideo.qtdRespostas}) Respostas </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='comment__answers'>
                {commentsAnswer &&
                    <div>
                        <Comments_answers_component />
                    </div>}
            </div>
        </>
    )
}

export default Comments_component