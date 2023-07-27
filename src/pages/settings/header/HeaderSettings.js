import './HeaderSettings.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const VideoDetails = () => {
    return (
        <>
            <div className='container__header__Settings'>
                <div className='box__header__Settings'>
                    <AiOutlineArrowLeft className='arrow__icon' color='var(--lightpurple)' fontSize={25} />
                </div>
            </div>
        </>
    )
}
export default VideoDetails