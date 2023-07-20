import './Upload.css'

import { useState } from "react"
import Button from '../../components/button/Button';

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
            <div>

                <div>
                    <Button
                        label={"Vídeo"}
                        onClick={handleVideoChange}
                        type={"button"}
                    />
                    <Button
                        label={"CapiShorts"}
                        onClick={handleShortsChange}
                        type={"button"}
                    />
                </div>
            </div>

            {isVideo &&
                <div>videoooooooooooooooooo</div>
            }
            {!isVideo &&
                <div>shooooooooooooooooorts</div>
            }
        </>
    )
}

export default Upload