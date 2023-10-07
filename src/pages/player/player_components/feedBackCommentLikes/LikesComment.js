import React from 'react'
import './LikesComment.css'
import ReacaoComentarioService from '../../../../service/Engajamento/ReacaoComentarioService'
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from 'react-icons/bi'
import { useEffect } from 'react'
import { useState } from 'react'

const LikesComment = ({ commentId }) => {
    const [likeBtnActive, setLikeBtnActive] = useState(false)
    const [dislikeBtnActive, setDislikeBtnActive] = useState(false)
  
    const [reacao, setReacao] = useState(undefined)
  
    async function getReacao() {
      try {
        const a = await ReacaoComentarioService.buscarUm(commentId)
        return a
        } catch (error) {
        console.error(error)
      }
    }
  
    useEffect(() => {
      getReacao().then((a) => {
        setReacao(a)
      })
    }, [commentId])
  
    useEffect(() => {
      if (reacao == undefined) {
        setLikeBtnActive(false)
        setDislikeBtnActive(false)
      } else if (reacao == false) {
        setDislikeBtnActive(true)
      } else if (reacao == true) {
        setLikeBtnActive(true)
      }
    }, [reacao])
  
    const handleToggleLikeBtn = async () => {
      const like = {idComentario: commentId, curtida: true}
      if (!likeBtnActive && !dislikeBtnActive) {
        setLikeBtnActive(true) 
        ReacaoComentarioService.criar(like)
      } else if (likeBtnActive && !dislikeBtnActive) {
        setLikeBtnActive(false) 
        ReacaoComentarioService.criar(like)
      }else if (dislikeBtnActive) {
        setLikeBtnActive(true) 
        setDislikeBtnActive(false) 
        ReacaoComentarioService.criar(like)
      }
    } 
  
    const handleToggleDislikeBtn = () => {
      const deslike = {idComentario: commentId, curtida: false} 
      if (!likeBtnActive && !dislikeBtnActive) {
        setDislikeBtnActive(true) 
        ReacaoComentarioService.criar(deslike)
      } else if (!likeBtnActive && dislikeBtnActive) {
        setDislikeBtnActive(false) 
        ReacaoComentarioService.criar(deslike)
      } else if (likeBtnActive) {
        setDislikeBtnActive(true) 
        setLikeBtnActive(false) 
        ReacaoComentarioService.criar(deslike)
      }
    } 
  
    return (
      <div className="like__dislike__buttons__comments"> 
        <button className={`like__btn__comment${likeBtnActive ? '__active' : ''}`} onClick={handleToggleLikeBtn}>
          {likeBtnActive ? <BiSolidLike size={'1rem'} /> : <BiLike size={'1rem'} />}
        </button>
        <button className={`dislike__btn__comment${dislikeBtnActive ? '__active' : ''}`} onClick={handleToggleDislikeBtn}>
          {dislikeBtnActive ? <BiSolidDislike size={'1rem'} /> : <BiDislike size={'1rem'} />}
        </button>
      </div>
    ) 
}

export default LikesComment