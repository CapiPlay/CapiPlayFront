import React, { useEffect, useState } from 'react'
import './Like_btn.css'
import { BiLike, BiSolidLike } from 'react-icons/bi'
import ReacaoService from '../../../../service/Engajamento/ReacaoService'

function Like_btn({ video }) {

  const [like_btn, setLikeBtn] = useState(true);

  const handleToggleLikeBtn = () => {
    setLikeBtn(!like_btn);
    if (like_btn) {
      ReacaoService.criar(
        {
          usuarioId: 1, // usuarioId
          videoId: video.uuid,
          curtida: true
        }
      )
    } else {
      ReacaoService.criar(null)
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
    <div>{like_btn ?
      <button className='like__btn'>
        <BiLike size={'1.6rem'} onClick={() => handleToggleLikeBtn()} />
      </button>
      :
      <button className='like__btn'>
        <BiSolidLike size={'1.6rem'} onClick={() => handleToggleLikeBtn()} />
      </button>
    }</div>
  )
}

export default Like_btn