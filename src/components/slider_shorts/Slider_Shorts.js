import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Shortcard from '../short_card/ShortCard';
import VideoService from '../../service/Video/VideoService';

function Slider_Shorts({ historic }) {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [videosRec, setVideosRec] = useState([])
    const [shortHistoric, setShortHistoric] = useState([]);

    useEffect(() => {
        getVideosRec();
        getShortsHistoric();

        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getShortsHistoric = async () => {
        try {
            const res = await VideoService.buscarHistorico(6, 0, true)
            setShortHistoric(res);
        } catch (error) {
            console.error(error)
        }
    }

    const getVideosRec = async () => {
        const pageable = await VideoService.buscarTodos(12, 0, true);
        const videos = pageable.content;
        console.log(videos)
        if (videos?.length >= 6) {
            setVideosRec([...videos]);
        } else {
            setVideosRec([]);
        }
    };

    const settingsDesk = {
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1416,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    arrows: false,
                }
            },
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
        <div>
            {videosRec ? (
                <Slider {...settingsDesk}>
                    {historic
                        ? shortHistoric.map((video) => (
                            <Shortcard key={video.uuid} short={video} />
                        ))
                        : videosRec.map((video) => (
                            <Shortcard key={video.uuid} short={video} />
                        ))}
                </Slider>
            ) : (
                <div className="ui segment">
                    <p></p>
                    <div className="ui active dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            )}
        </div>
    );

    const renderTabletView = () => (
        <div>
            {videosRec ? (
                <Slider {...settingsTablet}>
                    {videosRec.map((video) => (
                        <Shortcard key={video.uuid} short={video} />
                    ))}
                </Slider>
            ) : (
                <div className="ui segment">
                    <p></p>
                    <div className="ui active dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            )}
        </div>
    );

    const renderMobileView = () => (
        <div>
            {videosRec ? (
                <Slider {...settingsMobile}>
                    {videosRec.map((video) => (
                        <Shortcard key={video.uuid} short={video} />
                    ))}
                </Slider>
            ) : (
                <div className="ui segment">
                    <p></p>
                    <div className="ui active dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            )}
        </div>
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