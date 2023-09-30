import React, { useEffect, useState } from 'react'
import './Comments_answers_component.css'
import ProfilePicture from '../../../../assets/image/channel_profile.png'
import { BiSolidDownArrow, BiSolidUpArrow, BiDislike, BiLike, BiSolidLike } from 'react-icons/bi'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Comments_answers_component({answer}) {
    const [showMore, setShowMore] = useState(false);
    const [like_btn, setLikeBtn] = useState(true);
    const [commentsAnswer, setCommentsAnswer] = useState(false);
    const [foto, setFoto] = useState(ProfilePicture)
    const [date, setDate] = useState();
    const [formatoHora, setFormatoHora] = useState()

    useEffect(() => {
        setFoto('http://10.4.96.50:7000/api/usuario/static/' + answer.idUsuario.foto)
    }, [answer])

    const setDateComment = () => {
        const dataHoraJSON = answer.dataHora;
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

    const comment_likes = 200

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const toggleLikeBtn = () => {
        setLikeBtn(!like_btn);
    };

    useEffect(() => {
        setDateComment()
    }, [date])

    return (
        <>
            <div className='comment'>
                <div className='user__icon__container'>
                    <img src={foto} className='user__icon' />
                </div>
                <div className='comment__content'>
                    <div className='comment__user__username'>
                        @{answer.idUsuario.nomeCanal}<span className='ball'></span> há {date} {formatoHora}
                    </div>
                    {answer.texto.length < 50 ?
                    <p>
                        {answer.texto}
                    </p>
                    :
                    <p className='comment__text'>{showMore ? answer.texto : `${answer.texto.slice(0, 50)}...`}
                        {!showMore && 
                            <button onClick={() => toggleShowMore()} className='description__moreORless'> <p className='selection'>Mostrar mais <span className='selection__icon'><BiSolidDownArrow /></span></p></button>
                        }
                    </p>
                    }
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