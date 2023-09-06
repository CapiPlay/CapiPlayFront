// style
import './Upload.css'


// react
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { HiUpload } from 'react-icons/hi'
import { BsFillFastForwardFill } from 'react-icons/bs'


// componentes
import Button from '../../components/button/Button'
import HeaderUpload from './headerUpload/HeaderUpload'
import InputFile from '../../components/inputFile/InputFile'
import { setImageData } from './imageDataStore';


// imagens
import Preview from '../../assets/image/preview_video.png'


function Upload() {
    const [isVideo, setIsVideo] = useState(true);
    const imagePreviewRef = useRef(null);

    const [miniatura, setMiniatura] = useState();

    const handleVideoChange = () => {
        setIsVideo(true);
    }
    const handleShortsChange = () => {
        setIsVideo(false);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMiniatura(file);
            setImageData(file);
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

    return (
        <>
            <div className='upload__page'>
                <HeaderUpload caminho={"/"} />
                <div className='upload__container'>
                    <div className='upload__buttons__box'>
                        {isVideo &&
                            <>
                                <button className='upload__button__selected' type='button' onClick={handleVideoChange}>
                                    <div className='upload__icons__box__selected'>
                                        <div className='upload__icons__border__selected'>
                                            <HiUpload color='var(--purple)' fontSize={25} />
                                        </div>
                                    </div>
                                    <p className='upload__button__selected__text'>Vídeo</p>
                                </button>
                                <button className='upload__button' type='button' onClick={handleShortsChange}>
                                    <div className='upload__icons__box'>
                                        <div className='upload__icons__border'>
                                            <BsFillFastForwardFill color='var(--whitesmoke)' fontSize={25} />
                                        </div>
                                    </div>
                                    <p className='upload__button__text'>CapiShorts</p>
                                </button>
                            </>
                        }
                        {!isVideo &&
                            <>
                                <button className='upload__button' type='button' onClick={handleVideoChange}>
                                    <div className='upload__icons__box'>
                                        <div className='upload__icons__border'>
                                            <HiUpload color='var(--whitesmoke)' fontSize={25} />
                                        </div>
                                    </div>
                                    <p className='upload__button__text'>Vídeo</p>
                                </button>
                                <button className='upload__button__selected' type='button' onClick={handleShortsChange}>
                                    <div className='upload__icons__box__selected'>
                                        <div className='upload__icons__border__selected'>
                                            <BsFillFastForwardFill color='var(--purple)' fontSize={25} />
                                        </div>
                                    </div>
                                    <p className='upload__button__selected__text'>CapiShorts</p>
                                </button>
                            </>
                        }
                    </div>
                    <div className='upload__divider' />
                    {isVideo &&
                        <div className='upload__right__side__container'>
                            <div className='upload__file__box'>
                                <img
                                    id="upload__image__preview"
                                    ref={imagePreviewRef}
                                    src={Preview}
                                    alt="Preview da Imagem" />
                                <InputFile
                                    label={"Selecionar arquivo"}
                                    radius={"10px"}
                                    onChange={handleFileChange}
                                    file={miniatura}
                                    accept={".png"}
                                />
                            </div>
                            <div className='upload__next__buttons__box'>
                                <Button
                                    label={"Cancelar"}
                                    type={"submit"}
                                    principal={false}
                                />
                                <Link
                                    className='upload__next__button__link'
                                    to={{
                                        pathname: '/upload-video',
                                        state: { miniatura: miniatura }
                                    }}
                                >
                                    <Button
                                        label={"Próximo"}
                                        type={"submit"}
                                        principal={true}
                                    />
                                </Link>
                            </div>
                        </div>
                    }
                    {!isVideo &&
                        <div className='upload__right__side__container'>
                            <div className='upload__file__box__shorts'>
                                <img
                                    id="upload__image__preview__shorts"
                                    ref={imagePreviewRef}
                                    src="#"
                                    alt="Preview da Imagem" />
                                <div className='upload__box__all__buttons__shorts'>
                                    <InputFile
                                        label={"Selecionar arquivo"}
                                        radius={"10px"}
                                        onChange={handleFileChange}
                                        file={miniatura}
                                        accept={".png"}
                                    />
                                    <div className='upload__next__buttons__box__shorts'>
                                        <Button
                                            label={"Cancelar"}
                                            type={"submit"}
                                            principal={false}
                                        />
                                        <Link className='upload__next__button__link' to={`/upload-shorts`}>
                                            <Button
                                                label={"Próximo"}
                                                type={"submit"}
                                                principal={true}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}


export default Upload
