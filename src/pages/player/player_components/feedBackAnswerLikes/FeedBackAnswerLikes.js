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
      let like = 0
      let deslike = 0
      const temp = await RespostaService.buscarUm(answerId)
      if (likesAmount === 0 && dislikesAmount === 0) {
        if (temp !== undefined || temp !== null) {
          let lista = temp.reacaoRespostaList
          if (lista !== undefined || lista !== null) {
            lista.forEach(reaction => {
              if (reaction.curtida) {
                like += 1
              } else if (!reaction.curtida) {
                deslike += 1
              }
            });
          }
        }
      }
      setLikesAmount(like)
      setDislikesAmount(deslike)
    }

    const getLikeAmountCount = (event) => {
    if (event) {
      setLikesAmount(likesAmount + 1)
    } else {
      setLikesAmount(likesAmount - 1)
    }
  }

  const getDislikeAmountCount = (event) => {
    if (event) {
      setDislikesAmount(dislikesAmount + 1)
    } else {
      setDislikesAmount(dislikesAmount - 1)
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
      const like = { idResposta: answerId, curtida: true }
      if (!likeBtnActive && !dislikeBtnActive) {
        setLikeBtnActive(true)
        await RespostaService.criar(like)
        getLikeAmountCount(true)
      } else if (likeBtnActive && !dislikeBtnActive) {
        setLikeBtnActive(false)
        await RespostaService.criar(like)
        getLikeAmountCount(false)
      } else if (dislikeBtnActive) {
        setLikeBtnActive(true)
        setDislikeBtnActive(false)
        await RespostaService.criar(like)
        getLikeAmountCount(true)
        getDislikeAmountCount(false)
      }
    }
  
    const handleToggleDislikeBtn = async () => {
      const deslike = { idResposta: answerId, curtida: false }
      if (!likeBtnActive && !dislikeBtnActive) {
        setDislikeBtnActive(true)
        await RespostaService.criar(deslike)
        getDislikeAmountCount(true)
      } else if (!likeBtnActive && dislikeBtnActive) {
        setDislikeBtnActive(false)
        await RespostaService.criar(deslike)
        getDislikeAmountCount(false)
      } else if (likeBtnActive) {
        setDislikeBtnActive(true)
        setLikeBtnActive(false)
        await RespostaService.criar(deslike)
        getDislikeAmountCount(true)
        getLikeAmountCount(false)
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