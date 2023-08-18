import React, { useState } from 'react'
import './Dislike_btn.css'
import { BiDislike, BiSolidDislike } from 'react-icons/bi'

function Dislike_btn() {

  const [dislike_btn, setDislikeBtn] = useState(true);

  const handleToggleLikeBtn = () => {
    setDislikeBtn(!dislike_btn);
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
      {dislike_btn ?
        <button className='dislike__btn'><BiDislike size={'1.6rem'} onClick={() => handleToggleLikeBtn()} /></button>
        :
        <button className='dislike__btn'><BiSolidDislike size={'1.6rem'} onClick={() => handleToggleLikeBtn()} /></button>
      }
    </div>
  )
}

export default Dislike_btn