import React, { useEffect, useState } from 'react'
import './Slider_Shorts.css'
import Slider from 'react-slick';
import Shortcard from '../short_card/ShortCard';

function Slider_Shorts() {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    const settingsDesk = {
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

    const numbers = [1, 2, 3, 4, 5, 6, 7]; // Números para exibir nos slides

    const renderDesktopView = () => (
        <Slider {...settingsDesk}>
            {numbers.map((number, index) => (
                <div key={number}>
                    <Shortcard />
                </div>
            ))}
        </Slider>
    );

    const renderTabletView = () => (
        <Slider {...settingsTablet}>
            {numbers.map((number, index) => (
                <div key={number}>
                    <Shortcard />
                </div>
            ))}
        </Slider>
    );

    const renderMobileView = () => (
        <Slider {...settingsMobile}>
            {numbers.map((number, index) => (
                <div key={number}>
                    <Shortcard />
                </div>
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