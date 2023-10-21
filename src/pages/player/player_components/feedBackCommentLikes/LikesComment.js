import React from 'react'
import './LikesComment.css'
import ReacaoComentarioService from '../../../../service/Engajamento/ReacaoComentarioService'
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from 'react-icons/bi'
import { useEffect } from 'react'
import { useState } from 'react'
import ComentarioService from '../../../../service/Engajamento/ComentarioService'

const LikesComment = ({ commentId }) => {
    const [likeBtnActive, setLikeBtnActive] = useState(false)
    const [dislikeBtnActive, setDislikeBtnActive] = useState(false)
    const [likesAmount, setLikesAmount] = useState(0)
    const [dislikesAmount, setDislikesAmount] = useState(0)
  
    const [reacao, setReacao] = useState(undefined)
  
    async function getReacao() {
        const temp = await ReacaoComentarioService.buscarUm(commentId)
        setReacao(temp)
    }

    const getReacaoAmount = async () => {
      const temp = await ComentarioService.buscarUm(commentId)
      if(temp !== undefined || temp !== null){
        setLikesAmount(0)
        setDislikesAmount(0)
        let lista = temp.reacaoComentarioList
        lista.forEach(reaction => {
          if(reaction.curtida){
            if(likeBtnActive){
              setLikesAmount(likesAmount -1)
            }else{
              setLikesAmount(likesAmount + 1)
            }
          }else if(!reaction.curtida){
            if(dislikeBtnActive){
              setDislikesAmount(dislikesAmount - 1)
            }else{
              setDislikesAmount(dislikesAmount + 1)
            }
          }
        });
      }
    }
  
    useEffect(() => {
      getReacao()
      getReacaoAmount()
    }, [commentId])

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
      const like = {idComentario: commentId, curtida: true}
      if (!likeBtnActive && !dislikeBtnActive) {
        setLikeBtnActive(true) 
        await ReacaoComentarioService.criar(like)
        getReacaoAmount()
      } else if (likeBtnActive && !dislikeBtnActive) {
        setLikeBtnActive(false) 
        await ReacaoComentarioService.criar(like)
        getReacaoAmount()
      }else if (dislikeBtnActive) {
        setLikeBtnActive(true) 
        setDislikeBtnActive(false) 
        await ReacaoComentarioService.criar(like)
        getReacaoAmount()
      }
    } 
  
    const handleToggleDislikeBtn = async () => {
      const deslike = {idComentario: commentId, curtida: false} 
      if (!likeBtnActive && !dislikeBtnActive) {
        setDislikeBtnActive(true) 
        await ReacaoComentarioService.criar(deslike)
        getReacaoAmount()
      } else if (!likeBtnActive && dislikeBtnActive) {
        setDislikeBtnActive(false) 
        await ReacaoComentarioService.criar(deslike)
        getReacaoAmount()
      } else if (likeBtnActive) {
        setDislikeBtnActive(true) 
        setLikeBtnActive(false) 
        await ReacaoComentarioService.criar(deslike)
        getReacaoAmount()
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

export default LikesComment