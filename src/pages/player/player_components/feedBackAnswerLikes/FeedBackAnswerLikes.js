import React from 'react'
import './FeedBackAnswerLikes.css'
import ReacaoRespostaService from '../../../../service/Engajamento/ReacaoRespostaService'
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from 'react-icons/bi'
import { useEffect } from 'react'
import { useState } from 'react'
import RespostaService from '../../../../service/Engajamento/RespostaService'

const FeedBackAnswerLikes = ({ answerId }) => {
    const [likeBtnActive, setLikeBtnActive] = useState(false)
    const [dislikeBtnActive, setDislikeBtnActive] = useState(false)
    const [likesAmount, setLikesAmount] = useState(0)
    const [dislikesAmount, setDislikesAmount] = useState(0)
  
    const [reacao, setReacao] = useState(undefined)
  
    async function getReacao() {
        const temp = await ReacaoRespostaService.buscarUm(answerId)
        setReacao(temp)
    }

    const getReacaoAmount = async () => {
      const temp = await RespostaService.buscarUm(answerId)
      if(temp !== undefined || temp !== null){
        setLikesAmount(0)
        setDislikesAmount(0)
        let lista = temp.reacaoRespostaList
        lista.forEach(reaction => {
          if(reaction.curtida){
            setLikesAmount(likesAmount + 1)
          }else if(!reaction.curtida){
            setDislikesAmount(dislikesAmount + 1)
          }
        });
      }
    }
  
    useEffect(() => {
      getReacao()
      getReacaoAmount()
    }, [answerId])

    useEffect(() => {
      if (reacao === undefined) {
        setLikeBtnActive(false)
        setDislikeBtnActive(false)
      } else if (reacao === false) {
        setDislikeBtnActive(true)
      } else if (reacao === true) {
        setLikeBtnActive(true)
      }
    }, [reacao])
  
    const handleToggleLikeBtn = async () => {
      const like = {idResposta: answerId, curtida: true}
      if (!likeBtnActive && !dislikeBtnActive) {
        setLikeBtnActive(true) 
        await ReacaoRespostaService.criar(like)
        // getReacaoAmount()
      } else if (likeBtnActive && !dislikeBtnActive) {
        setLikeBtnActive(false) 
        await ReacaoRespostaService.criar(like)
        // getReacaoAmount()
      }else if (dislikeBtnActive) {
        setLikeBtnActive(true) 
        setDislikeBtnActive(false) 
        await ReacaoRespostaService.criar(like)
        // getReacaoAmount()
      }
    } 
  
    const handleToggleDislikeBtn = async () => {
      const deslike = {idResposta: answerId, curtida: false} 
      if (!likeBtnActive && !dislikeBtnActive) {
        setDislikeBtnActive(true) 
        await ReacaoRespostaService.criar(deslike)
        // getReacaoAmount()
      } else if (!likeBtnActive && dislikeBtnActive) {
        setDislikeBtnActive(false) 
        await ReacaoRespostaService.criar(deslike)
        // getReacaoAmount()
      } else if (likeBtnActive) {
        setDislikeBtnActive(true) 
        setLikeBtnActive(false) 
        await ReacaoRespostaService.criar(deslike)
        // getReacaoAmount()
      }
    } 
  
    return (
      <div className="like__dislike__buttons__comments"> 
        <button className={`like__btn__comment${likeBtnActive ? '__active' : ''}`} onClick={handleToggleLikeBtn}>
          {likeBtnActive ? <BiSolidLike size={'1rem'} /> : <BiLike size={'1rem'} />}
        </button>
        <h5>{likesAmount}</h5>
        <button className={`dislike__btn__comment${dislikeBtnActive ? '__active' : ''}`} onClick={handleToggleDislikeBtn}>
          {dislikeBtnActive ? <BiSolidDislike size={'1rem'} /> : <BiDislike size={'1rem'} />}
        </button>
        <h5>{dislikesAmount}</h5>
      </div>
    ) 
}

export default FeedBackAnswerLikes