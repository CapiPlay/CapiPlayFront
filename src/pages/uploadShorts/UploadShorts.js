import './UploadShorts.css'

import React from 'react'
import { useState, useRef } from "react"
import { HiUpload } from 'react-icons/hi';

import Button from '../../components/button/Button';
import InputFile from "../../components/inputFile/InputFile";
import HeaderUpload from '../upload/headerUpload/HeaderUpload';

function UploadShorts() {

  const [image, setImage] = useState()
  const imagePreviewRef = useRef(null)

  const [video, setVideo] = useState({
    titulo: "",
    descricao: null,
    tags: [],
    categoria: "",
    ehReels: true,
    video: "",
    miniatura: "",
    kids: ""
  })

  const handleInputChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append("foto", file)
      setImage(formData)
      localStorage.setItem("foto", formData)

      const reader = new FileReader();

      reader.onload = function (event) {
        if (imagePreviewRef.current) {
          imagePreviewRef.current.src = event.target.result;
          imagePreviewRef.current.style.display = 'block';
        }
      };

      reader.readAsDataURL(file);
    }
  }

  const enviarVideo = (event) => {
    event.preventDefault()
    // CardService.cadastrar(card)
    // alert("Cadastro efetuado!")
    console.log(video)
    // window.location.reload()
  }

  return (
    <>
      <div className='upload__shorts__page'>
        <HeaderUpload />
        <div className='upload__shorts__container'>
          <p>Informações do vídeo</p>
          <div className='upload__shorts__container__rows'>
            <div className='upload__shorts__container__row'>
              <label className='upload__shorts__label'>Título do vídeo</label>
              <input
                className='upload__shorts__input'
                placeholder={"Título do vídeo"}
                type={"text"}
                required={true}
                onChange={handleInputChange}
                name='titulo'
                value={video.titulo}
              />
              <label className='upload__shorts__label'>Categoria do vídeo</label>
              <select className='upload__shorts__select' onChange={handleInputChange} name='categoria' value={video.categoria}>
                <option defaultValue={''} disabled hidden value="">Selecione uma categoria</option>
                <option value="Artes e Cultura">Artes e Cultura</option>
                <option value="Ciência e Tecnologia">Ciência e Tecnologia</option>
                <option value="Culinária">Culinária</option>
                <option value="Educação">Educação</option>
                <option value="Entretenimento">Entretenimento</option>
                <option value="Esportes">Esportes</option>
                <option value="Documentários">Documentários</option>
                <option value="Jogos">Jogos</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Moda e Beleza">Moda e Beleza</option>
                <option value="Música">Música</option>
                <option value="Viagem e Turismo">Viagem e Turismo</option>
              </select>

              <div className='upload__shorts__box__tags'>
                <input
                  className="upload__shorts__tags__input"
                  placeholder={"Escreva suas tags"}
                  type={"text"}
                  required={true}
                  name='tags'
                  onChange={handleInputChange}
                  value={video.tags}
                />
                <button
                  className='upload__shorts__tags__button'
                  // onClick={}
                  type='button'>Enviar</button>
              </div>
              <div className='upload__shorts__tags__scroll'>
                <div className='upload__shorts__tag'>Lifestyle</div>
                <div className='upload__shorts__tag'>Ciência e Tecnologia</div>
                <div className='upload__shorts__tag'>Entretenimento</div>
              </div>
            </div>

            <div className='upload__shorts__container__row'>
              <div className='upload__shorts__box__inputfile'>
                <div className='upload__shorts__inputfile'>
                  <div className='upload__shorts__inputfile__border'>
                    <HiUpload color='var(--whitesmoke)' fontSize={40} />
                    <InputFile
                      label={"Selecionar arquivo"}
                      radius={"10px"}
                      file={image}
                      name='video'
                      onChange={handleFileChange}
                      value={video.video}
                    />
                  </div>
                </div>
                <img
                  id="upload__shorts__preview"
                  ref={imagePreviewRef}
                  src="#"
                  alt="Preview da Imagem" />
              </div>


              <div className='upload__shorts__child__friendly_box'>
                <p>Este vídeo é destinado para crianças?</p>
                <div className='upload__shorts__child__friendly_options'>
                  <div className='upload__shorts__child__friendly_option'>
                    <input type='radio' name='kids' value={video.kids} required={true} />
                    <label>Sim, é destinado para crianças</label>
                  </div>
                  <div className='upload__shorts__child__friendly_option'>
                    <input type='radio' name='kids' value={video.kids} required={true} />
                    <label>Não é destinado para crianças</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='upload__shorts__button__submit'>
            <Button
              label={"Criar"}
              onClick={enviarVideo}
              type={"submit"}
              principal={true} />
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadShorts