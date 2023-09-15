import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Video_card.css'

import img_miniatura from "../../assets/image/img_base_miniatura.png"

function Video_card({ video }) {

    if (!video) {
        // Handle the case when the video is undefined or null
        return <div>No Video Data</div>;
    }



    if (video.curtidas > 999999999) {
        video.curtidas = (video.curtidas / 1000000000).toFixed(1) + 'B';
    } else if (video.curtidas > 999999) {
        video.curtidas = (video.curtidas / 1000000).toFixed(1) + 'M';
    } else if (video.curtidas > 999) {
        video.curtidas = (video.curtidas / 1000).toFixed(1) + 'K';
    }

    return (

        <div className='box__video__card'>
            <Link to={`/video/${video.uuid}`}>
                <div className='container__video__image'>
                    <img src={"http://10.4.96.50:7000/api/video/static/" + video.caminhos[4]} className='container__video__card__image' />
                </div>
            </Link>
            <div className='container__video__info'>
                <img src="https://1.bp.blogspot.com/_i5HYEqTAi9w/SfkWb4gS0jI/AAAAAAAABXE/8BEdz7gYctA/s280/Pingu1.jpg" className='container__video__perfilImage' />
                <div className='container__video__info__text'>
                    <h5 className='container__video__title__text'>{video.titulo}</h5>
                    <div>
                        <h5 className='container__video__perfilName'>Nome do Canal</h5>
                        <h6 className='container__video__views'>{video.visualizacoes} visualizações <span className='text__likes'>{video.curtidas} Likes</span></h6>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Video_card