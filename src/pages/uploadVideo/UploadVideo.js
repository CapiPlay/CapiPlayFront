// style
import './UploadVideo.css'

// react
import { HiUpload } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import React, { useState, useRef } from 'react'

// componentes
import Input from '../../components/input/Input'
import Select from '../../components/select/Select'
import Button from '../../components/button/Button'
import InputFile from '../../components/inputFile/InputFile'
import HeaderUpload from '../upload/headerUpload/HeaderUpload'
import InputTextArea from '../../components/inputTextArea/InputTextArea'

// service
import VideoService from '../../service/VideoService'

function UploadVideo() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const miniaturaUrl = searchParams.get("miniatura");

  const [videoSrc, setVideoSrc] = useState(null)

  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const [image, setImage] = useState()
  const imagePreviewRef = useRef(null)

  const [video, setVideo] = useState({
    titulo: "",
    descricao: "",
    tags: [],
    categoria: "",
    shorts: false,
    video: "",
    miniatura: miniaturaUrl,
    kids: ""
  })

  const categorias = [
    { label: "Artes e Cultura", value: "Artes e Cultura" },
    { label: "Ciência e Tecnologia", value: "Ciência e Tecnologia" },
    { label: "Culinária", value: "Culinária" },
    { label: "Educação", value: "Educação" },
    { label: "Esportes", value: "Esportes" },
    { label: "Entretenimento", value: "Entretenimento" },
    { label: "Documentários", value: "Documentários" },
    { label: "Jogos", value: "Jogos" },
    { label: "Lifestyle", value: "Lifestyle" },
    { label: "Moda e Beleza", value: "Moda e Beleza" },
    { label: "Música", value: "Música" },
    { label: "Viagem e Turismo", value: "Viagem e Turismo" }
  ];

  const handleInputChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append("foto", file)
      setImage(formData)

      const reader = new FileReader();

      reader.onload = function (event) {
        if (imagePreviewRef.current) {
          imagePreviewRef.current.src = event.target.result;
          imagePreviewRef.current.style.display = 'block';
        }
      };

      reader.readAsDataURL(file);

      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);

      setVideoSrc(URL.createObjectURL(file));
    }
  }

  const renderizarNovaTag = () => {
    if (tag !== "") {
      setTags([...tags, tag])
      const updatedTags = [...video.tags, tag]
      setVideo({ ...video, tags: updatedTags })
      setTag("")
    }
  };

  const enviarVideo = (event) => {
    event.preventDefault()

    setVideo((prevVideo) => ({
      ...prevVideo,
      video: videoSrc
    }));
    VideoService.criar(video)
    console.log(video)
    // window.location.reload()
  }

  return (
    <>
      <div className='upload__video__page'>
        <HeaderUpload caminho={"/upload"} />
        <div className='upload__video__container'>
          <p>Informações do vídeo</p>
          <div className='upload__video__container__rows'>
            <div className='upload__video__container__row'>
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
                enable={true}
              />
            </div>

            <div className='upload__video__container__row'>
              <div className='upload__video__box__inputfile'>
                <div className='upload__video__inputfile'>
                  <div className='upload__video__inputfile__border'>
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
                      <div className='upload__video__tag' key={index}>{tag}</div>
                    ))}
                  </div>
                }
              </div>
              <div className='upload__video__child__friendly__box'>
                <p>Este vídeo é destinado para crianças?</p>
                <div className='upload__video__child__friendly__options'>
                  <div className='upload__video__child__friendly__option'>
                    <input type='radio' name='kids' value={true} required={true} onChange={handleInputChange} />
                    <label>Sim, é destinado para crianças</label>
                  </div>
                  <div className='upload__video__child__friendly__option'>
                    <input type='radio' name='kids' value={false} required={true} onChange={handleInputChange} />
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