import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import './Home.css';
import Slider from './slider/Slider';
import Video_card from '../../components/video_card/Video_card';
import Side_Bar from './side_bar/Side_Bar';
import Slider_Category from './slider_category/Slider_Category';
import Slider_Shorts from '../../components/slider_shorts/Slider_Shorts';
import VideoService from '../../service/Video/VideoService';
import Aos from 'aos'
import Cookies from 'js-cookie';

function Home(darkMode) {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [videosReu, setVideosReu] = useState([])
  const [videosRet, setVideosRet] = useState([])
  const [videosRev, setVideosRev] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [loadingMoreVideos, setLoadingMoreVideos] = useState(false);


  Aos.init({
    duration: 200
  });

  useEffect(() => {
    userProfile();
    getVideosRet();
    getVideosRev();
    getVideosReu();
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    const scrolled = window.innerHeight + window.scrollY;
    const totalHeight = document.documentElement.scrollHeight;

    if (!loadingMoreVideos && scrolled >= totalHeight - 100) {
      setLoadingMoreVideos(true);
      getMoreVideos(currentPage + 1);
    };
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, loadingMoreVideos]);

  const getMoreVideos = async (page) => {
    const moreVideos = await VideoService.buscarTodos(10, page, false);
    if (moreVideos.last === true) {
      const newVideos = moreVideos.content.filter((video) => {
        return !videosReu.some((existingVideo) => existingVideo.uuid === video.uuid);
      });
      if (newVideos?.length > 0) {
        setVideosReu((prevVideos) => [...prevVideos, ...newVideos]);
        setCurrentPage(page);
      }
    }

    setLoadingMoreVideos(false);
  };

  const getVideosReu = async () => {
    const pageable = await VideoService.buscarTodos(6, 0, false);
    const videos = pageable.content
    if (videosReu?.length == 0) {
      setVideosReu(videos);
    } else {
      setVideosReu([]);
    }
  };


  const getVideosRet = async () => {
    const pageable = await VideoService.buscarTodos(6, 0, false);
    if (pageable?.length > 0) {
      setVideosRet(pageable);
    } else {
      setVideosRet([]);
    }
  }

  const getVideosRev = async () => {
    const videos = await VideoService.buscarTodos(6, 0, false);
    const vidiozinho = videos.content;
    if (vidiozinho?.length >= 6) {
      setVideosRev(vidiozinho);
    } else {
      setVideosRev([]);
      window.location.reload();
    }
  }

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
      <div className={`home-component ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header userLogin={userProfile()} />
        <Side_Bar />
        <div className='container__header__home'></div>
        <div className='container__home'>
          <div className='container__slider__base__desk'>
            <Slider_Category />
          </div>
          <div className='container__video__cards__desk'>
            {videosRev ? (
              videosRev.map((video) => (
                <Video_card key={video.uuid} video={video} />
              ))
            ) : (
              <div class="ui active inline loader"></div>
            )}
          </div>
          <div className='container__shorts__cards__desk'>
            <Slider_Shorts />
          </div>
          <div className='container__video__cards__desk'>
            {videosReu ? (
              videosReu.map((video) => (
                <Video_card key={video.uuid} video={video} />
              ))
            ) : (
              <div class="ui active inline loader"></div>
            )}
          </div>
        </div>
      </div>
    </>

  );

  const renderTabletView = () => (
    <>
      <Header />
      <Side_Bar />
      <div className='container__home'>
        <div className='container__slider__base__tablet'>
          <Slider_Category />
        </div>
        <div className='container__video__cards__tablet'>
          {videosRev ? (
            videosRev.map((video) => (
              <Video_card key={video.uuid} video={video} />
            ))
          ) : (
            <div className="ui segment">
              <p></p>
              <div className="ui active dimmer">
                <div className="ui loader"></div>
              </div>
            </div>
          )}
        </div>
        <div className='container__shorts__cards__tablet'>
          <Slider_Shorts />
        </div>
        <div className='container__video__cards__tablet'>
          {videosReu ? (
            videosReu.map((video) => (
              <Video_card key={video.uuid} video={video} />
            ))
          ) : (
            <div class="ui active inline loader"></div>
          )}
        </div>
      </div>
    </>
  );

  const renderMobileView = () => (
    <>
      <Header />
      <Side_Bar />
      <div className='container__home'>
        <div className='container__slider__base'>
          <Slider />
        </div>
        <div className='container__video__cards'>
          {videosRet ? (
            videosRet.map((video) => (
              <Video_card key={video.uuid} video={video} />
            ))
          ) : (
            <div className="ui segment">
              <p></p>
              <div className="ui active dimmer">
                <div className="ui loader"></div>
              </div>
            </div>
          )}
        </div>
        <div className='container__shorts__cards__mobile'>
          <Slider_Shorts />
        </div>
        <div className='container__video__cards'>
          {videosReu ? (
            videosReu.map((video) => (
              <Video_card key={video.uuid} video={video} />
            ))
          ) : (
            <div className="ui active inline loader"></div>
          )}
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

export default Home;