import React from 'react'
import './Video_card.css'

// const video = {
//     uuid,
//     caminho,
//     descricao,
//     titulo,
//     tags,
//     categoria
// }

function Video_card({video}) {
    return (
        <div className='box__video__card'>
            <div className='container__video__image'>
                <img src={video.caminho} className='container__video__card__image' />
            </div>
            <div className='container__video__info'>
                <img src="https://1.bp.blogspot.com/_i5HYEqTAi9w/SfkWb4gS0jI/AAAAAAAABXE/8BEdz7gYctA/s280/Pingu1.jpg" className='container__video__perfilImage' />
                <div className='container__video__info__text'>
                    <h5 className='container__video__title__text'>{video.titulo}</h5>
                    <div>
                        <h5 className='container__video__perfilName'>Nome do Canal</h5>
                        <h6 className='container__video__views'>10K de visualizações  ---  57K de Likes</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video_card