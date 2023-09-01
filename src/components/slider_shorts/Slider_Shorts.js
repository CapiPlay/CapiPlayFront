import React, { useEffect, useState } from 'react'
import './Slider_Shorts.css'
import Slider from 'react-slick';
import Shortcard from '../short_card/ShortCard';
import VideoService from '../../service/Video/VideoService';

function Slider_Shorts() {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [videosRec, setVideosRec] = useState([])

    useEffect(() => {
        getVideosRec();
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getVideosRec = async () => {
        const videos = await VideoService.buscarVideosHomeShorts(0);
        
        if (videos) {
            const filteredVideos = videos.filter(video => video.shorts === true);
            console.log(filteredVideos);
            if (filteredVideos.length >= 6) {
                setVideosRec(filteredVideos);
            } else {
                setVideosRec([]);
            }
        } else {
            setVideosRec([]);
        }
    };

    const settingsDesk = {
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    swipeToSlide: true,
                    arrows: false,
                }
            }
        ]
    };

    const settingsTablet = {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 3,
                }
            }
        ]
    };

    const settingsMobile = {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            }
        ]
    };

    const renderDesktopView = () => (
        <Slider {...settingsDesk}>
            {videosRec.map((video) => (
                <Shortcard key={video.uuid} short={video} />
            ))}
        </Slider>
    );

    const renderTabletView = () => (
        <Slider {...settingsTablet}>
            {videosRec.map((video) => (
                <Shortcard key={video.uuid} short={video} />
            ))}
        </Slider>
    );

    const renderMobileView = () => (
        <Slider {...settingsMobile}>
            {videosRec.map((video) => (
                <Shortcard key={video.uuid} short={video} />
            ))}
        </Slider>
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

};

export default Slider_Shorts