import React, { useState, useEffect } from 'react';
import './LikeDislikeButtons.css';
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from 'react-icons/bi';
import ReacaoService from '../../../../service/Engajamento/ReacaoService';

function LikeDislikeButtons({ video }) {

  const [likeBtnActive, setLikeBtnActive] = useState(false);
  const [dislikeBtnActive, setDislikeBtnActive] = useState(false);

  async function getReacao() {
    const temp = await ReacaoService.buscarUm(video.uuid);
    return await temp;
    };
  
  useEffect(() => {
    getReacao();
    console.log(reacao);
    if (reacao) {
      if (reacao == null) {
        setLikeBtnActive(false);
        setDislikeBtnActive(false);
        return;
      } else if (!reacao) {
        setDislikeBtnActive(true);
        return;
      } else if (reacao) {
        setLikeBtnActive(true);
        return;
      }
    }
  }, [video.uuid]);

  const handleToggleLikeBtn = async () => {
    if (!likeBtnActive && !dislikeBtnActive) {
      setLikeBtnActive(true);
      ReacaoService.criar({
        idVideo: video.uuid,
        curtida: true
      });
    } else if (likeBtnActive && !dislikeBtnActive) {
      setLikeBtnActive(false);
      ReacaoService.criar({
        idVideo: video.uuid,
        curtida: true
      });
    }else if (dislikeBtnActive) {
      setLikeBtnActive(true);
      setDislikeBtnActive(false);
      ReacaoService.criar({
        idVideo: video.uuid,
        curtida: true
      });
    }
  };

  const handleToggleDislikeBtn = () => {
    if (!likeBtnActive && !dislikeBtnActive) {
      setDislikeBtnActive(true);
      ReacaoService.criar({
        idVideo: video.uuid,
        curtida: false
      });
    } else if (!likeBtnActive && dislikeBtnActive) {
      setDislikeBtnActive(false);
      ReacaoService.criar({
        idVideo: video.uuid,
        curtida: false
      });
    } else if (likeBtnActive) {
      setDislikeBtnActive(true);
      setLikeBtnActive(false);
      ReacaoService.criar({
        idVideo: video.uuid,
        curtida: false
      });
    }
  };

  return (
    <div className="like-dislike-buttons"> 
      <button className={`like__btn${likeBtnActive ? 'active' : ''}`} onClick={handleToggleLikeBtn}>
        {likeBtnActive ? <BiSolidLike size={'1.6rem'} /> : <BiLike size={'1.6rem'} />}
      </button>
      <button className={`dislike__btn${dislikeBtnActive ? 'active' : ''}`} onClick={handleToggleDislikeBtn}>
        {dislikeBtnActive ? <BiSolidDislike size={'1.6rem'} /> : <BiDislike size={'1.6rem'} />}
      </button>
    </div>
  );
}

export default LikeDislikeButtons;
