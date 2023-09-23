import React, { useState, useEffect } from 'react';
import './LikeDislikeButtons.css';
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from 'react-icons/bi';
import ReacaoService from '../../../../service/Engajamento/ReacaoService';

function LikeDislikeButtons({ video }) {

  const [likeBtnActive, setLikeBtnActive] = useState(false);
  const [dislikeBtnActive, setDislikeBtnActive] = useState(false);

  async function getReacao() {
    try {
      const temp = await ReacaoService.buscarUm(video.uuid);
      return temp;
      } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  useEffect(() => {
    var reacao = getReacao();
    console.log(reacao.then((res) => console.log(res)));
    if (reacao) {
      if (reacao == undefined) {
        console.log("CAIU AQUIIII CAIU AQUIIII UNDEFINED");
        setLikeBtnActive(false);
        setDislikeBtnActive(false);
      } else if (reacao == false) {
        console.log("CAIU AQUIIII CAIU AQUIIII BTNDESLIKE");
        setDislikeBtnActive(true);
      } else if (reacao == true) {
        console.log("CAIU AQUIIII BTNLIKE");
        setLikeBtnActive(true);
      }
    }
  }, [video.uuid]);

  const handleToggleLikeBtn = async () => {
    var reacao = getReacao();
    console.log(reacao.then((res) => console.log(res)));
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
