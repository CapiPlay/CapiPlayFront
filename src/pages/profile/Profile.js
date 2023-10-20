// styles
import './Profile.css'

//cookies
import Cookies from 'js-cookie';

// react
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

//components
import Side_Bar from '../../components/side_bar/Side_Bar'
import Header from '../../components/header/Header'
import Video_card from '../../components/video_card/Video_card'

// images
import ProfilePicture from '../../assets/imagemPerfil.png'

//services
import VideoService from '../../service/Video/VideoService';
import UsuarioEngajamentoService from '../../service/Engajamento/UsuarioEngajamentoService';

const Profile = () => {

    const { id } = useParams();
    const [usuario, setUsuario] = useState({});
    const [foto, setFoto] = useState(ProfilePicture)

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    const [videos, setVideos] = useState([])
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(3)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        console.log(id)
        if(id){
            UsuarioEngajamentoService.buscarUm(id)
                .then((data) => {
                    setUsuario(data)
                })
                .catch((error) => console.error('Erro ao buscar usuario:', error));
        }
    }, [id]);

    useEffect(() => {
        setFoto('http://10.4.96.50:7000/api/usuario/static/' + usuario.foto)
    }, [usuario])

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        getVideos();
    }, [page, size]);

    const userProfile = () => {
        const userToken = Cookies.get('token');
        if (userToken) {
            try {
                const tokenPayload = userToken.split('.')[1];
                const decodedPayload = atob(tokenPayload);
                const userLogin = JSON.parse(decodedPayload);
                if (userLogin) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.error("Erro ao analisar o token:", error);
                return false;
            }
        } else {
            return false;
        }
    }

    const getVideos = async () => {
        try {
            const response = await VideoService.buscarUploads(size, page, {
                donoCanalId: id
            });
            setVideos(response)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handlePageChange = (page) => {
        setPage(page);
    };

    const renderMobileView = () => (
        <>
            <Header />
            <div>
                <div>
                    <div className='profile__container_mobile'>
                        <div className='profile__container__picture' key={usuario.idUsuario}>
                            <img className="profile__pic" src={foto} />
                            <h2 className='profile__name'>{usuario.nomeCanal}</h2>
                            <button className='profile__subscribe__button'>Inscrever-se</button>
                            <p className='profile__id'>@{usuario.nomePerfil}</p>
                            <div className='profile__details'>
                                <p>{usuario.quantidadeInscritos} inscritos</p>
                            </div>
                            <div className='profile__description'>
                                <p>{usuario.descricao}</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile__pagination__desktop">
                        Páginas:
                        {Array.from({ length: totalPages }, (_, index) => index).map(
                            (page) => (
                                <button className="buttonPaginaItens"
                                    key={page}
                                    // className={page === currentPage ? "active" : ""}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page + 1}
                                </button>
                            )
                        )}
                    </div>
                    <hr className="solid" />
                    <div className='profile__box__videos'>
                    {videos.map((video) => (
                            <Video_card key={video.uuid} video={video} />
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
    const renderDesktopView = () => (
        <>
            <Side_Bar />
            <Header userLogin={userProfile()} />
            <div>
                <div>
                    <div className='profile__container_desktop'>
                        <div className='profile__container__picture__desktop'>
                            <img className="profile__pic__desktop" src={foto} />
                            <div className='profile__box__desktop'>
                                <div className='profile__box__name_subscribe__desktop'>
                                    <h2 className='profile__name__desktop'>{usuario.nomeCanal}</h2>
                                    <button className='profile__subscribe__button__desktop'>Inscrever-se</button>
                                </div>
                                <p className='profile__id__desktop'>@{usuario.nomePerfil}</p>
                                <div className='profile__details__desktop'>
                                    <p>{usuario.quantidadeInscritos} inscritos</p>
                                </div>
                                <div className='profile__description__desktop'>
                                    <p>{usuario.descricao}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="solid" />
                    <div className="profile__pagination__desktop">
                        Páginas:
                        {Array.from({ length: totalPages }, (_, index) => index).map(
                            (page) => (
                                <button className="buttonPaginaItens"
                                    key={page}
                                    // className={page === currentPage ? "active" : ""}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page + 1}
                                </button>
                            )
                        )}
                    </div>
                    <div className='profile__box__videos__desktop'>
                        {videos.map((video) => (
                            <Video_card key={video.uuid} video={video} />
                        ))}
                    </div>
                </div>

            </div>
        </>



    )
    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
            // } else if (screenSize.width < 900 && screenSize.width > 500) {
            //   return renderTabletView();
        } else {
            return renderMobileView();
        }
    };
    return <>{getViewToRender()}</>;
}

export default Profile