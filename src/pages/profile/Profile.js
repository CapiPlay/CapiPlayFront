//react e css
import './Profile.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

//components
import Side_Bar from '../home/side_bar/Side_Bar'
import Video_card from '../../components/video_card/Video_card'
import Header from '../../components/header/Header'

//service
import UsuarioEngajamentoService from '../../service/Engajamento/UsuarioEngajamentoService';

//cookies
import Cookies from 'js-cookie';

import ProfilePicture from '../../assets/imagemPerfil.png'


const Profile = () => {

    const [usuario, setUsuario] = useState({});
    const [foto, setFoto] = useState(ProfilePicture)
    const { idUsuario } = useParams();

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


    useEffect(() => {
        UsuarioEngajamentoService.buscarUm()
            .then((data) => {
                setUsuario(data)
                console.log(data)
            })
            .catch((error) => console.error('Erro ao buscar usuario:', error));
    }, [idUsuario]);

    useEffect(() => {
        setFoto('http://10.4.96.50:7000/api/usuario/static/' + usuario.foto)
    }, [usuario])

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        console.log(usuario)
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                    <hr class="solid" />
                    <div className='profile__box__videos'>
                        <Video_card />
                        <Video_card />
                        <Video_card />
                        <Video_card />
                        <Video_card />
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
                    <div className='profile__box__videos__desktop'>
                        <Video_card />
                        <Video_card />
                        <Video_card />
                        <Video_card />
                        <Video_card />
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