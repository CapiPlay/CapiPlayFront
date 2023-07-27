import './Profile.css'

import React, { useEffect, useState } from 'react'

import HeaderProfile from '../profile/header_profile/HeaderProfile'
import Side_Bar from '../home/side_bar/Side_Bar'
import Video_card from '../../components/video_card/Video_card'
import Header from '../../components/header/Header'
import UserService from '../../service/UserService'; // Importe o serviço de produtos aqui


import ProfilePicture from '../../assets/image/channel_profile.png'



const Profile = ({ user }) => {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    const [users, setUsers] = useState([]);

    useEffect(() => {
      // Quando o componente for montado, buscar os produtos e atualizar o estado
      UserService.findAll()
        .then((data) => setUsers(data))
        .catch((error) => console.error('Erro ao buscar usuario:', error));
    }, []);

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

    const verifyScreen = () => {
        if (screenSize.width > 900) {
            return false
        } else {
            return true
        }
    }

    return (
        <>
            {verifyScreen() ?
                <>
                    <HeaderProfile />
                    <div>
                        {users.map((user) => (
                            <div key={user.id}  >
                                <div className='profile__container'>
                                    <div className='profile__container__picture' key={user.id}>
                                        <img className="profile__pic" src={ProfilePicture} />
                                        <h2 className='profile__name'> {user.name}</h2>
                                        <button className='profile__subscribe__button'>Inscrever-se</button>
                                        <p className='profile__id'> {user.id}</p>
                                        <div className='profile__details'>
                                            <p> {user.subscribers}</p>
                                            <p> {user.videos}</p>
                                        </div>
                                        <div className='profile__description'>
                                            <p> {user.description}</p>
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
                        ))}
                    </div>
                </>
                :
                <>
                    <Side_Bar />
                    <Header />
                    <div className='profile__container_'>
                        <div className='profile__container__picture__desktop'>
                            <img className="profile__pic__desktop" src={ProfilePicture} />
                            <div className='profile__box__desktop'>
                                <div className='profile__box__name_subscribe__desktop'>
                                    <h2 className='profile__name__desktop'>Thomas Turbando</h2>
                                    <button className='profile__subscribe__button__desktop'>Inscrever-se</button>
                                </div>
                                <p className='profile__id__desktop'>@Paula_Tejanto</p>
                                <div className='profile__details__desktop'>
                                    <p>45k Inscritos</p>
                                    <p>13 Vídeos</p>
                                </div>
                                <div className='profile__description__desktop'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien nisi, dictum sit amet lacinia sed, gravida sed urna. Duis a scelerisque purus. Suspendisse blandit hendrerit diam, nec eleifend eros tempus non. Mauris consectetur orci sed nisl suscipit, congue consectetur nulla dapibus. Maecenas vel orci dictum nibh fringilla fermentum vitae et sapien. Duis id arcu tempus.</p>
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
                </>
            }
        </>

    )
}

export default Profile