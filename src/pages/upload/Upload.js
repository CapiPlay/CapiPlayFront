import './Upload.css'

import { useState } from "react"
import HeaderUpload from './headerUpload/HeaderUpload';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import Button from "../../components/button/Button";

function Upload() {

    const [isVideo, setIsVideo] = useState(true)

    const handleVideoChange = () => {
        setIsVideo(true)
    }
    const handleShortsChange = () => {
        setIsVideo(false)
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
                    <div>
                        {isVideo &&
                            <>
                                <div>videoooooooooooooooooo</div>
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
                                <div>shooooooooooooooooorts</div>
                                <Button
                                    label={"Entrar"}
                                    // onClick={}
                                    type={"submit"}
                                    principal={true}
                                />
                            </>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Upload