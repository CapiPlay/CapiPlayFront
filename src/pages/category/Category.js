import React, { useState, useEffect } from 'react'
import './Category.css'
import Header from '../../components/header/Header';
import Side_Bar from '../../components/side_bar/Side_Bar';
import Slider_Category from '../home/slider_category/Slider_Category';
import Cookies from 'js-cookie';
import VideoService from '../../service/Video/VideoService';
import Video_card from '../../components/video_card/Video_card';
import { useLocation, useParams } from 'react-router-dom';
import Slider from 'react-slick';

function Category() {


    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [videosReu, setVideosReu] = useState([])
    const category = useParams().category;
    const location = useLocation();

    useEffect(() => {
        setVideosReu([]);
        getMoreVideos(0);
        console.log(location);
    }, [location.pathname]);

    useEffect(() => {
        getMoreVideos(0);
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getMoreVideos = async (page) => {
        const moreVideos = await VideoService.buscarPorCategoria(category, page, 50, false);
        if (moreVideos) {
            if (moreVideos.length > 0) {
                setVideosReu((prevVideos) => [...prevVideos, ...moreVideos]);
            }
        }
    };

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


    const renderDesktopView = () => (
        <>
            <div>
                <Header userLogin={userProfile()} />
                <Side_Bar />
                <div className='container__header__home'></div>
                <div className='container__home'>
                    <div className='container__slider__base__desk'>
                        <Slider_Category />
                    </div>
                    <div className='contaoner__video__category'>
                        <div className='container__video__cards__desk'>

                        </div>
                        <div className='container__video__cards__desk'>
                            {videosReu.map((video) => (
                                <Video_card key={video.uuid} video={video} />
                            ))}
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>

    );

    const renderTabletView = () => (
        <>
            <Header />
            <div className='container__home'>
                <div className='container__slider__base__tablet'>
                    <Slider_Category />
                </div>
                <div className='container__shorts__cards__tablet'>
                </div>
                <div className='container__video__cards__tablet'>
                    {videosReu.map((video) => (
                        <Video_card key={video.uuid} video={video} />
                    ))}
                </div>
            </div>
        </>
    );

    const renderMobileView = () => (
        <>
        <Header />
        <div className='container__home'>
          <div className='container__slider__base'>
            <Slider />
          </div>
          <div className='container__shorts__cards__mobile'>
          </div>
          <div className='container__video__cards'>
            {videosReu.map((video) => (
              <Video_card key={video.uuid} video={video} />
            ))}
          </div>
        </div>
      </>
    );

    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
        } else if (screenSize.width < 900 && screenSize.width > 500) {
            return renderTabletView();
        } else {
            return renderMobileView();
        }
    };

    return <>{getViewToRender()}</>;


}

export default Category