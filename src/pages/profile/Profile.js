import React, { useEffect, useState } from 'react'
import HeaderProfile from '../profile/header_profile/HeaderProfile'
import './Profile.css'
import ProfilePicture from '../../assets/image/channel_profile.png'

import Video_card from '../../components/video_card/Video_card'

function Profile() {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

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
        <><HeaderProfile />
            {verifyScreen() ?
                <div className='container__profile'>
                    <div className='container__picture__profile'>
                        <img className="profile__pic" src={ProfilePicture} />
                        <h2 className='profile__name'>Thomas Turbando</h2>
                        <button className='profile__subscribe__button'>Inscrever-se</button>
                        <p className='id__profile'>@Paula_Tejanto</p>
                        <div className='details__profile'>
                            <p>45k Inscritos</p>
                            <p>13 Vídeos</p>
                        </div>
                        <div className='description__profile'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien nisi, dictum sit amet lacinia sed, gravida sed urna. Duis a scelerisque purus. Suspendisse blandit hendrerit diam, nec eleifend eros tempus non. Mauris consectetur orci sed nisl suscipit, congue consectetur nulla dapibus. Maecenas vel orci dictum nibh fringilla fermentum vitae et sapien. Duis id arcu tempus.</p>
                        </div>
                    </div>
                </div>
                :
                <div className='container__profile'>
                    <div className='container__picture__profile__desktop'>
                        <img className="profile__pic__desktop" src={ProfilePicture} />
                        <h2 className='profile__name__desktop'>Thomas Turbando</h2>
                        <button className='profile__subscribe__button__desktop'>Inscrever-se</button>
                        <p className='id__profile__desktop'>@Paula_Tejanto</p>
                        <div className='details__profile__desktop'>
                            <p>45k Inscritos</p>
                            <p>13 Vídeos</p>
                        </div>
                        <div className='description__profile__desktop'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien nisi, dictum sit amet lacinia sed, gravida sed urna. Duis a scelerisque purus. Suspendisse blandit hendrerit diam, nec eleifend eros tempus non. Mauris consectetur orci sed nisl suscipit, congue consectetur nulla dapibus. Maecenas vel orci dictum nibh fringilla fermentum vitae et sapien. Duis id arcu tempus.</p>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Profile