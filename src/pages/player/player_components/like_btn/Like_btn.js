import React, { useEffect } from 'react'
import './Like_btn.css'
import { BiLike } from 'react-icons/bi'
import EngajamentoService from '../../../../service/EngajamentoService'

function Like_btn({video}) {

  let curtido = false;

  const handleToggleLikeBtn = () => {
  //   if(curtido){
  //     EngajamentoService.criar(
  //         {
  //             usuarioId: 1, // usuarioId
  //             // videoId: video.uuid,
  //             curtida: 1
  //         }
  //     )
  // }else{
  //     EngajamentoService.criar(
  //         {
  //             usuarioId: 1, // usuarioId
  //             // videoId: video.uuid,
  //             curtida: 0
  //         }
  //     )
  // }
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
    <div>
      <button className='like__btn'><BiLike size={'1.6rem'} onClick={() => handleToggleLikeBtn()}/></button>
    </div>
  )
}

export default Like_btn