import './Upload.css'

import { useState } from "react"
import HeaderUpload from './headerUpload/HeaderUpload';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import Button from "../../components/button/Button";
import InputFile from '../../components/inputFile/InputFile';

function Upload() {

    const [isVideo, setIsVideo] = useState(true)
    const [image, setImage] = useState()

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
                                    <AiOutlineArrowLeft className='arrow__icon' color='var(--lightpurple)' fontSize={25} />
                                    Vídeo
                                </button>
                                <button className='upload_button' type='button' onClick={handleShortsChange}>
                                    <AiOutlineArrowLeft className='arrow__icon' color='var(--lightpurple)' fontSize={25} />                            CapiShorts
                                </button>
                            </>
                        }
                        {!isVideo &&
                            <>
                                <button className='upload_button' type='button' onClick={handleVideoChange}>
                                    <AiOutlineArrowLeft className='arrow__icon' color='var(--lightpurple)' fontSize={25} />
                                    Vídeo
                                </button>
                                <button className='upload_button_selected' type='button' onClick={handleShortsChange}>
                                    <AiOutlineArrowLeft className='arrow__icon' color='var(--lightpurple)' fontSize={25} />                            CapiShorts
                                </button>
                            </>
                        }
                    </div>
                    <div className='upload__divider' />
                    <div>
                        {isVideo &&
                            <>
                                <InputFile
                                    label={"Foto de perfil"}
                                    radius={"20px"}
                                    onChange={handleFileChange}
                                    file={image}
                                />
                                <div>videoooooooooooooooooo</div>
                                <Button
                                    label={"Entrar"}
                                    // onClick={}
                                    type={"submit"}
                                    principal={true}
                                />
                                <Button
                                    label={"Entrar"}
                                    // onClick={}
                                    type={"submit"}
                                    principal={true}
                                />
                            </>
                        }
                        {!isVideo &&
                            <>
                                <div>
                                    <div>shooooooooooooooooorts</div>
                                    <div className='upload__next__buttons__box'>
                                        <Button
                                            label={"Entrar"}
                                            // onClick={}
                                            type={"submit"}
                                            principal={true}
                                        />
                                        <Button
                                            label={"Entrar"}
                                            // onClick={}
                                            type={"submit"}
                                            principal={true}
                                        />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Upload