// style
import './UploadVideo.css'

// react
import { HiUpload } from 'react-icons/hi'
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

// componentes
import Input from '../../components/input/Input'
import Select from '../../components/select/Select'
import Button from '../../components/button/Button'
import InputFile from '../../components/inputFile/InputFile'
import HeaderUpload from '../upload/headerUpload/HeaderUpload'
import InputTextArea from '../../components/inputTextArea/InputTextArea'
import { getImageData } from '../../pages/upload/imageDataStore';

// service
import VideoService from '../../service/Video/VideoService'

function UploadVideo() {

  const navigate = useNavigate();
  const [videoSrc, setVideoSrc] = useState(null)
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const image = getImageData();
  const imagePreviewRef = useRef(null);
  const [imagem, setImagem] = useState(null);

  const [video, setVideo] = useState({
    titulo: "",
    descricao: "",
    tags: [],
    categoria: "",
    shorts: false,
    video: "",
    restrito: ""
  })

  const categorias = [
    { label: "Artes e Cultura", value: "ARTESECULTURA" },
    { label: "Ciência e Tecnologia", value: "CIENCIAETECNOLOGIA" },
    { label: "Culinária", value: "CULINARIA" },
    { label: "Educação", value: "EDUCACAO" },
    { label: "Esportes", value: "ESPORTES" },
    { label: "Entretenimento", value: "ENTRETERIMENTO" },
    { label: "Documentários", value: "DOCUMENTARIO" },
    { label: "Jogos", value: "JOGOS" },
    { label: "Lifestyle", value: "LIFESTYLE" },
    { label: "Moda e Beleza", value: "MODAEBELEZA" },
    { label: "Música", value: "MUSICA" },
    { label: "Viagem e Turismo", value: "VIAGEMETURISMO" }
  ];

  const handleVideoChange = (event) => {
    const selectedVideo = event.target.files[0];
    setVideo({ ...video, video: selectedVideo });
    const reader = new FileReader();
    reader.onload = function (event) {
      if (imagePreviewRef.current) {
        imagePreviewRef.current.src = event.target.result;
        imagePreviewRef.current.style.display = 'block';
      }
    }
    reader.readAsDataURL(selectedVideo);
    const videoURL = URL.createObjectURL(selectedVideo);
    setVideoSrc(videoURL);

    setVideoSrc(URL.createObjectURL(selectedVideo));
  }

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setVideo({ ...video, [name]: value });
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const renderizarNovaTag = () => {
    if (tag !== "") {
      setTags([...tags, tag])
      const updatedTags = [...video.tags, tag]
      setVideo({ ...video, tags: updatedTags })
    }
  }

  const deletarTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
    setVideo((prevVideo) => ({
      ...prevVideo,
      tags: updatedTags,
    }))
  }

  const enviarVideo = async (event) => {
    event.preventDefault();
    try {
      const videoFormData = new FormData();
      videoFormData.append("titulo", video.titulo);
      videoFormData.append("descricao", video.descricao);
      videoFormData.append("tags", video.tags);
      videoFormData.append("categoria", video.categoria);
      videoFormData.append("shorts", video.shorts);
      videoFormData.append("video", video.video);
      videoFormData.append("miniatura", image);
      videoFormData.append("restrito", video.restrito);
      console.log("Conteúdo do videoFormData:");
      for (let pair of videoFormData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      const response = await VideoService.criar(videoFormData);
      alert("Vídeo cadastrado")
      navigate('/')
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar o vídeo")
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='upload__video__page'>
        <HeaderUpload caminho={"/upload"} />
        <div className='upload__video__container'>
          <p>Informações do vídeo</p>
          <div className='upload__video__container__rows'>
            <div className='upload__video__container__first__row'>
              <Input
                placeholder={"Título do vídeo"}
                type={"text"}
                value={video.titulo}
                onChange={handleInputChange}
                name='titulo'
                required={true}
              />
              <InputTextArea
                placeholder={'Descrição do vídeo'}
                value={video.descricao}
                onChange={handleInputChange}
                name='descricao'
                required={true}
              />
              <Select
                options={categorias}
                value={video.categoria}
                placeholder="Categoria do vídeo"
                onChange={handleInputChange}
                name="categoria"
                required={true}
              />
            </div>
            <div className='upload__video__container__first__row'>
              <div className='upload__video__box__inputfile'>
                <div className='upload__video__inputfile'>
                  <div className='upload__video__inputfile__border'>
                    <HiUpload color='var(--whitesmoke)' fontSize={40} />
                    <InputFile
                      label={"Selecionar arquivo"}
                      radius={"10px"}
                      file={imagem}
                      name="video"
                      onChange={handleVideoChange}
                      value={video.video}
                      accept={".MP4"}
                    />
                  </div>
                </div>
                {videoSrc && (
                  <video className='upload__video__preview' controls src={videoSrc} width="320" height="240">
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                )}
              </div>
              <div className='upload__video__box__input'>
                <div className='upload__video__box__input'>
                  <div className='upload__video__box__tags'>
                    <div className='upload__video__tags__input'>
                      <Input
                        placeholder={"Tags do vídeo"}
                        type={"text"}
                        value={tag}
                        onChange={handleTagChange}
                        name='tag'
                        required={true}
                      />
                    </div>
                    <button
                      className='upload__video__tags__button'
                      onClick={renderizarNovaTag}
                      type='button'>
                      Enviar
                    </button>
                  </div>
                </div>
                {tags.length != 0 &&
                  <div className='upload__video__tags__scroll'>
                    {tags.map((tag, index) => (
                      <div className='upload__video__tag' key={index}>
                        {tag}
                        <button className='upload__video__tag__button__delete' onClick={() => deletarTag(index)}>x</button>
                      </div>
                    ))}
                  </div>
                }
              </div>
              <div className='upload__video__child__friendly__box'>
                <p>Este vídeo é destinado para crianças?</p>
                <div className='upload__video__child__friendly__options'>
                  <div className='upload__video__child__friendly__option'>
                    <input type='radio' name='restrito' value={false} required={true} onChange={handleInputChange} />
                    <label>Sim, é destinado para crianças</label>
                  </div>
                  <div className='upload__video__child__friendly__option'>
                    <input type='radio' name='restrito' value={true} required={true} onChange={handleInputChange} />
                    <label>Não é destinado para crianças</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='upload__video__button__submit'>
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

export default UploadVideo