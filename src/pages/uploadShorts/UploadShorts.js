// style
import './UploadShorts.css'

// react
import { HiUpload } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import React, { useState, useRef } from "react"

// componentes
import Input from '../../components/input/Input'
import Select from '../../components/select/Select'
import Button from '../../components/button/Button'
import InputFile from '../../components/inputFile/InputFile'
import HeaderUpload from '../upload/headerUpload/HeaderUpload'

// service
import VideoService from '../../service/VideoService'

function UploadShorts() {

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
    descricao: null,
    tags: [],
    categoria: "",
    shorts: true,
    video: "",
    miniatura: miniaturaUrl,
    restrito: ""
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
    if (tag.trim() !== "") {
      setTags([...tags, tag])
      const updatedTags = [...video.tags, tag]
      setVideo({ ...video, tags: updatedTags })
      setTag("")
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

  const enviarShorts = (event) => {
    event.preventDefault()

    setVideo((prevVideo) => ({
      ...prevVideo,
      video: videoSrc
    }));
    // VideoService.criar(video)
    console.log(video)
    // window.location.reload()
  }

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      renderizarNovaTag();
    }
  };

  return (
    <>
      <div className='upload__shorts__page'>
        <HeaderUpload caminho={"/upload"} />
        <div className='upload__shorts__container'>
          <p>Informações do shorts</p>
          <div className='upload__shorts__container__rows'>
            <div className='upload__shorts__container__row'>
              <Input
                placeholder={"Título do shorts"}
                type={"text"}
                value={video.titulo}
                onChange={handleInputChange}
                name='titulo'
                required={true}
              />
              <Select
                options={categorias}
                value={video.categoria}
                placeholder="Categoria do shorts"
                onChange={handleInputChange}
                name="categoria"
                required={true}
                enable={true}
              />

              <div className='upload__shorts__box__input'>
                <div className='upload__shorts__box__input'>
                  <div className='upload__shorts__box__tags'>
                    <div className='upload__shorts__tags__input'>
                      <Input
                        placeholder={"Tags do shorts"}
                        type={"text"}
                        value={tag}
                        onChange={handleTagChange}
                        onKeyDown={handleEnterPress}
                        name='tag'
                        required={true}
                      />
                    </div>
                    <button
                      className='upload__shorts__tags__button'
                      onClick={renderizarNovaTag}
                      type='button'>
                      Enviar
                    </button>
                  </div>
                </div>
                {tags.length != 0 &&
                  <div className='upload__shorts__tags__scroll'>
                    {tags.map((tag, index) => (
                      <div className='upload__shorts__tag' key={index}>
                        {tag}
                        <button className='upload__shorts__tag__button__delete' onClick={() => deletarTag(index)}>x</button>
                      </div>
                    ))}
                  </div>
                }
              </div>

              <div className='upload__shorts__child__friendly__box'>
                <p>Este shorts é destinado para crianças?</p>
                <div className='upload__shorts__child__friendly__options'>
                  <div className='upload__shorts__child__friendly__option'>
                    <input type='radio' name='restrito' value={false} required={true} onChange={handleInputChange} />
                    <label>Sim, é destinado para crianças</label>
                  </div>
                  <div className='upload__shorts__child__friendly__option'>
                    <input type='radio' name='restrito' value={true} required={true} onChange={handleInputChange} />
                    <label>Não é destinado para crianças</label>
                  </div>
                </div>
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
                      accept={".mp4"}
                    />
                  </div>
                </div>
                {videoSrc && (
                  <video className='upload__shorts__preview' controls src={videoSrc} width="200" height="600">
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                )}
              </div>
            </div>
          </div>
          <div className='upload__shorts__button__submit'>
            <Button
              label={"Criar"}
              onClick={enviarShorts}
              type={"submit"}
              principal={true} />
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadShorts