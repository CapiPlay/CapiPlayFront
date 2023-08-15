import React, { useEffect, useState } from 'react'
import './Like_btn.css'
import { BiLike,  BiSolidLike } from 'react-icons/bi'
import EngajamentoService from '../../../../service/EngajamentoService'

function Like_btn({video}) {

  const [like_btn, setLikeBtn] = useState(true);

  const handleToggleLikeBtn = () => {
    setLikeBtn(!like_btn);
    if(like_btn){
      EngajamentoService.criar(
        {
            usuarioId: 1, // usuarioId
            videoId: video.uuid,
            curtida: true
        }
      )
    }else{
      EngajamentoService.criar(null)
    }
    
  } 

  // useEffect(() => {
  //   curtido = EngajamentoService.buscarReacao(
  //     {
  //       usuarioId: 1, //usuarioId
  //       // videoId: video.uuid,
  //     }
  //   );

  //   if(curtido.curtida){
  //     // alguma coisa
  //   }
  // }, [])

  return (
    <div>{ like_btn ?
      <button className='like__btn'>
        <BiLike size={'1.6rem'} onClick={() => handleToggleLikeBtn()}/>
      </button> 
        : 
      <button className='like__btn'>
          <BiSolidLike size={'1.6rem'} onClick={() => handleToggleLikeBtn()}/>   
      </button>
    }</div>
  )
}

export default Like_btn