import './HeaderUpload.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const HeaderUpload = () => {
    return (
        <>
            <div className='header__upload__box'>
                <AiOutlineArrowLeft className='arrow__icon' color='var(--lightpurple)' fontSize={25} />
                <p>Upload</p>
            </div>
        </>
    )
}
export default HeaderUpload