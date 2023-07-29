import './Upload.css'

import { useState, useRef } from "react"
import { HiUpload } from 'react-icons/hi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsFillFastForwardFill } from 'react-icons/bs';

import HeaderUpload from './headerUpload/HeaderUpload';
import Button from "../../components/button/Button";
import InputFile from '../../components/inputFile/InputFile';

function Upload() {

    const [isVideo, setIsVideo] = useState(true)
    const [image, setImage] = useState()
    const imagePreviewRef = useRef(null)

    const handleVideoChange = () => {
        setIsVideo(true)
    }
    const handleShortsChange = () => {
        setIsVideo(false)
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

    return (
        <>
            <div className='upload__page'>
                <HeaderUpload />
                <div className='upload__container'>
                    <div className='upload__buttons_box'>
                        {isVideo &&
                            <>
                                <button className='upload_button_selected' type='button' onClick={handleVideoChange}>
                                    <HiUpload className='arrow__icon' color='var(--lightpurple)' fontSize={25} />
                                    Vídeo
                                </button>
                                <button className='upload_button' type='button' onClick={handleShortsChange}>
                                    <BsFillFastForwardFill className='arrow__icon' color='var(--lightpurple)' fontSize={25} />                            CapiShorts
                                </button>
                            </>
                        }
                        {!isVideo &&
                            <>
                                <button className='upload_button' type='button' onClick={handleVideoChange}>
                                    <HiUpload className='arrow__icon' color='var(--lightpurple)' fontSize={25} />
                                    Vídeo
                                </button>
                                <button className='upload_button_selected' type='button' onClick={handleShortsChange}>
                                    <BsFillFastForwardFill className='arrow__icon' color='var(--lightpurple)' fontSize={25} />                            CapiShorts
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
                                    src="#"
                                    alt="Preview da Imagem" />
                                <InputFile
                                    label={"Selecionar arquivo"}
                                    radius={"10px"}
                                    onChange={handleFileChange}
                                    file={image}
                                />
                            </div>
                            <div className='upload__next__buttons__box'>
                                    <Button
                                        label={"Cancelar"}
                                        // onClick={}
                                        type={"submit"}
                                        principal={false}
                                    />
                                    <Button
                                        label={"Próximo"}
                                        // onClick={}
                                        type={"submit"}
                                        principal={true}
                                    />
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
                                        file={image}
                                    />
                                    <div className='upload__next__buttons__box__shorts'>
                                        <Button
                                            label={"Cancelar"}
                                            // onClick={}
                                            type={"submit"}
                                            principal={false}
                                        />
                                        <Button
                                            label={"Próximo"}
                                            // onClick={}
                                            type={"submit"}
                                            principal={true}
                                        />
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