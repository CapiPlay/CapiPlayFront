import './HeaderUpload.css'

import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const HeaderUpload = ({ caminho }) => {

    const navigate = useNavigate();

    function navegar() {
        navigate(caminho);
    }

    return (
        <>
            <div className='header__upload__box' onClick={navegar}>
                <Link to={ }>
                    <AiOutlineArrowLeft className='arrow__icon' color='var(--lightpurple)' fontSize={25} />
                </Link>
                <p>Upload</p>
            </div>
        </>
    )
}

export default HeaderUpload