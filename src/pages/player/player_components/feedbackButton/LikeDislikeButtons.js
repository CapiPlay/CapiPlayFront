import React, { useState, useEffect } from 'react';
import './LikeDislikeButtons.css';
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from 'react-icons/bi';
import ReacaoService from '../../../../service/Engajamento/ReacaoService';
import { set } from 'date-fns';

function LikeDislikeButtons({ video }) {

  const [likeBtnActive, setLikeBtnActive] = useState(false);
  const [dislikeBtnActive, setDislikeBtnActive] = useState(false);

  const [reacao, setReacao] = useState(undefined);

  async function getReacao() {
    try {
      const a = await ReacaoService.buscarUm(video.uuid);
      return a;
      } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getReacao().then((a) => {
      console.log("SDFSDFSDDSFDSFFDS" + a);
      setReacao(a);
    });
  }, [video.uuid]);

  useEffect(() => {
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
  }, [reacao]);

  const handleToggleLikeBtn = async () => {
    const like = {idVideo: video.uuid, curtida: true};
    if (!likeBtnActive && !dislikeBtnActive) {
      setLikeBtnActive(true);
      ReacaoService.criar(like)
    } else if (likeBtnActive && !dislikeBtnActive) {
      setLikeBtnActive(false);
      ReacaoService.criar(like)
    }else if (dislikeBtnActive) {
      setLikeBtnActive(true);
      setDislikeBtnActive(false);
      ReacaoService.criar(like)
    }
  };

  const handleToggleDislikeBtn = () => {
    const deslike = {idVideo: video.uuid, curtida: false};
    if (!likeBtnActive && !dislikeBtnActive) {
      setDislikeBtnActive(true);
      ReacaoService.criar(deslike)
    } else if (!likeBtnActive && dislikeBtnActive) {
      setDislikeBtnActive(false);
      ReacaoService.criar(deslike)
    } else if (likeBtnActive) {
      setDislikeBtnActive(true);
      setLikeBtnActive(false);
      ReacaoService.criar(deslike)
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
