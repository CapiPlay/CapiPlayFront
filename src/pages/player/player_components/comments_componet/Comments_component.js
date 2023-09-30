import React, { useEffect, useState } from 'react'
import './Comments_component.css'
import { BiSolidDownArrow, BiSolidDislike, BiDislike, BiLike, BiSolidLike } from 'react-icons/bi'
import Comments_answers_component from '../comments_answers_component/Comments_answers_component'
import ProfilePicture from '../../../../assets/image/channel_profile.png'
import { IoMdSend } from 'react-icons/io'
import RespostaService from '../../../../service/Engajamento/RespostaService'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Comments_component({ commentVideo }) {
    const [showMore, setShowMore] = useState(false);
    const [like_btn, setLikeBtn] = useState(true);
    const [dislike_btn, setDislikeBtn] = useState(true);
    const [commentsAnswer, setCommentsAnswer] = useState(false);
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [date, setDate] = useState();
    const [formatoHora, setFormatoHora] = useState()
    const [curtidas, setCurtidas] = useState(0)
    const [descurtidas, setDescurtidas] = useState(0)
    const [foto, setFoto] = useState(ProfilePicture)
    const [answer, setAnswer] = useState(false)
    const [answerText, setAnswerText] = useState('')
    const [allCommentsAnswers, setAllCommentsAnswers] = useState()

    useEffect(() => {
        setFoto('http://10.4.96.50:7000/api/usuario/static/' + commentVideo.idUsuario.foto)
    }, [commentVideo])

    useEffect(() => {
        setCommentLikes()
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

    useEffect(() => {
        handleAllAnswers()
    }, [commentsAnswer])

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const setCommentLikes = async () => {
        
    }

    const toggleLikeBtn = () => {
       
        setLikeBtn(!like_btn);
    };

    const toggleDislikeBtn = () => {
        setDislikeBtn(!dislike_btn);
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
            setDate(diferencaEmDias)
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

    const handleNewAnswer = () => {
        const criarCMD = {
            texto: answerText,
                idComentario: commentVideo.idComentario
        }
        console.log(criarCMD)
        if (answerText.trim() !== '') {
            console.log("Foi")
            RespostaService.criar(criarCMD)
            console.log(answerText)
            setAnswerText('');
        }
    }

    const handleToggleAnswer = () => {
         setAnswer(!answer)
    }

    const handleAllAnswers = async () => {
        let temp = await RespostaService.buscarTodosPorComentario(commentVideo.idComentario, 0);
        setAllCommentsAnswers(temp.content)
    }

    return (
        <>
            <div className='comment'>
                <div className='user__icon__container'>
                    <img src={foto} className='user__icon' />
                </div>
                <div className='comment__content'>
                    <div className='comment__user__username' >
                        @{commentVideo.idUsuario.nomeCanal}<span className='ball'></span><p key={date}> há {date} {formatoHora}</p>
                    </div>
                    {commentVideo.texto.length < 50 ?
                    <p>
                        {commentVideo.texto}
                    </p>
                    :
                    <p className='comment__text'>{showMore ? commentVideo.texto : `${commentVideo.texto.slice(0, 50)}...`}
                        {!showMore && 
                            <button onClick={() => toggleShowMore()} className='description__moreORless'> <p className='selection'>Mostrar mais <span className='selection__icon'><BiSolidDownArrow /></span></p></button>
                        }
                    </p>
                    }
                    <div className='comment__interactions'>
                        <div className='likes'>
                            {like_btn ?
                                <>
                                    <BiLike size={'1rem'} className='comment__like__btn' onClick={() => toggleLikeBtn()} />{curtidas}
                                </>
                                :
                                <>
                                    <BiSolidLike size={'1rem'} className='comment__like__btn' onClick={() => toggleLikeBtn()} />{curtidas}
                                </>
                            }
                        </div>
                        <div className='dislikes'>
                            {dislike_btn ?
                                <>
                                    <BiDislike size={'1rem'} className='comment__dislike__btn' onClick={() => toggleDislikeBtn()}/>{descurtidas}
                                </>
                                :
                                <>
                                    <BiSolidDislike size={'1rem'} className='comment__dislike__btn' onClick={() => toggleDislikeBtn()}/>{descurtidas}
                                </>
                            }
                        </div>
                        {verifyDesktop() ?
                            <div className='comment__total__answers' onClick={toggleCommentsAnswers}>
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
                        <div className='answer' onClick={handleToggleAnswer}><span className='ball'></span> <p>Responder</p></div>
                    </div>
                    {answer ?
                        <div className='input__answer__container'>
                            <input 
                                type='text'
                                onChange={(e) => setAnswerText(e.target.value)}
                                /> 
                            <div className='send__icon__comment' onClick={handleNewAnswer}><IoMdSend size={'1.6rem'}/></div>
                        </div>
                        :
                        <></>
                    }
                </div>
            </div>
            <div className='comment__answers'>
                {commentsAnswer &&
                    <div>
                        {allCommentsAnswers.map((answer) => (
                            <Comments_answers_component answer={answer} key={answer}/>
                        ))}
                    </div> 
                }
            </div>
        </>
    )
}

export default Comments_component