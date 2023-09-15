// style
import './UploadShorts.css'

// react
import { HiUpload } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react'

// componentes
import Input from '../../components/input/Input'
import Select from '../../components/select/Select'
import Button from '../../components/button/Button'
import InputFile from '../../components/inputFile/InputFile'
import HeaderUpload from '../upload/headerUpload/HeaderUpload'
import { getImageData } from '../../pages/upload/imageDataStore';

// service
import VideoService from '../../service/Video/VideoService'

function UploadShorts() {

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
    shorts: true,
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

  const enviarShorts = async (event) => {
    event.preventDefault();
    try {
      const shortsFormData = new FormData();
      shortsFormData.append("titulo", video.titulo);
      shortsFormData.append("descricao", video.descricao);
      shortsFormData.append("tags", video.tags);
      shortsFormData.append("categoria", video.categoria);
      shortsFormData.append("shorts", video.shorts);
      shortsFormData.append("video", video.video);
      shortsFormData.append("miniatura", image);
      shortsFormData.append("restrito", video.restrito);
      console.log("Conteúdo do videoFormData:");
      for (let pair of shortsFormData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      const response = await VideoService.criar(shortsFormData);
      alert("Shorts cadastrado!")
      navigate('/')
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar o Shorts")
      console.error('Error:', error);
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
                      file={imagem}
                      name='video'
                      onChange={handleVideoChange}
                      value={video.video}
                      accept={".MP4"}
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