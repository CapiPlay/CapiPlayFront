import './HeaderUpload.css'

import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const HeaderUpload = ({ caminho }) => {
    
    return (
        <>
            <div className='header__upload__box'>
                <Link to={caminho}>
                    <AiOutlineArrowLeft className='arrow__icon' color='var(--lightpurple)' fontSize={25} />
                </Link>
                <p>Upload</p>
            </div>
        </>
    )
}

export default HeaderUpload