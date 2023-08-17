import "./ShortCard.css"
import numeral from "numeral";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Shortcard = ({ short }) => {

    

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

    if (!short) {
        // Handle the case when the video is undefined or null
        return <div>No Video Data</div>;
    }

    short = {
        img: "https://i0.wp.com/techwek.com/wp-content/uploads/2021/12/fotos-de-papel-de-parede-para-celular-masculino-3d.png?fit=512%2C1024&ssl=1",
        title: "O que é ReactJS? #HipstersPontoTube",
        views: 1000
    }

    const renderMobileView = () => (
        <div className="container__short__card">
            <Link to={`/player/${short.uuid}`}>
                <img className="short__image" src={"http://localhost:7000/api/video/static/" + short.caminhos[4]} />
            </Link>
            <div className="container__informations__shorts">
                <span>{short.titulo}</span>
                {short.views > 999
                    ?
                    <span>
                        {numeral(short.views).format('0.0a')} de visualizações
                    </span>
                    :
                    <span>
                        {short.views} visualizações
                    </span>
                }
            </div>
        </div>
    );

    const renderDesktopView = () => (
        <div className="container__short__card__desk">
            <Link to={`/player/${short.uuid}`}>
                <img className="short__image" src={short.img} />
            </Link>
            <div className="container__informations__shorts">
                <span>{short.title}</span>
                {short.views > 999
                    ?
                    <span>
                        {numeral(short.views).format('0.0a')} de visualizações
                    </span>
                    :
                    <span>
                        {short.views} visualizações
                    </span>
                }
            </div>
        </div>
    );

    const renderTabletView = () => (
        <div className="container__short__card__tablet">
            <Link to={`/player/${short.uuid}`}>
                <img className="short__image" src={short.img} />
            </Link>
            <div className="container__informations__shorts">
                <span>{short.title}</span>
                {short.views > 999
                    ?
                    <span>
                        {numeral(short.views).format('0.0a')} de visualizações
                    </span>
                    :
                    <span>
                        {short.views} visualizações
                    </span>
                }
            </div>
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

}
export default Shortcard; 