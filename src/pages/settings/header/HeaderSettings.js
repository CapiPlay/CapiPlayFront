import { Link } from 'react-router-dom';
import './HeaderSettings.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const VideoDetails = () => {
    return (
        <>
            <div className='container__header__Settings'>
                <div className='box__header__Settings'>
                    <Link to={"/profile"}>
                        <AiOutlineArrowLeft className='arrow__icon' color='var(--lightpurple)' fontSize={25} />
                    </Link>
                </div>
            </div>
        </>
    )
}
export default VideoDetails