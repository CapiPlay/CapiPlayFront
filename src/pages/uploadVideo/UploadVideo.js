import './UploadVideo.css'

import React from 'react'
import { useState } from "react"

import Input from "../../components/input/Input";
import InputFile from "../../components/inputFile/InputFile";
import HeaderUpload from '../upload/headerUpload/HeaderUpload';

function UploadVideo() {

  const objVideo = {
    titulo: '',
    descricao: '',
    categoria: '',
    thumbnail: '',
    tags: '',
    kids: ''
  }

  const [videoData, setVideoData] = useState(objVideo)

  const handleInputChange = (e) => {
    setVideoData({ ...videoData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='upload__video__page'>
        <HeaderUpload />
        <div className='upload__video__container'>
          <Input
            placeholder={"Título do vídeo"}
            type={"text"}
            onChange={handleInputChange}
            required={true}
          />

          <Input
            placeholder={"Descrição do vídeo"}
            type={"text"}
            onChange={handleInputChange}
            required={true}
          />

          <select>
            <option defaultChecked disabled>Selecione uma categoria</option>
            <option>Artes e Cultura</option>
            <option>Ciência e Tecnologia</option>
            <option>Culinária</option>
            <option>Educação</option>
            <option>Entretenimento</option>
            <option>Esportes</option>
            <option>Documentários</option>
            <option>Jogos</option>
            <option>Lifestyle</option>
            <option>Moda e Beleza</option>
            <option>Música</option>
            <option>Viagem e Turismo</option>
          </select>

          <Input
            placeholder={"Descrição do vídeo"}
            type={"text"}
            onChange={handleInputChange}
            required={true}
          />

          <div className='upload__video__child__friendly_box'>
            <Input
              placeholder={"Sim, é destinado para crianças"}
              type={"radio"}
              onChange={handleInputChange}
              required={true}
            />
            <Input
              placeholder={"Não é destinado para crianças"}
              type={"radio"}
              onChange={handleInputChange}
              required={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadVideo