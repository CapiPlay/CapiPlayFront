import "./Historic.css"

import { useEffect, useState } from "react"
import { format } from 'date-fns';

// Componentes
import HeaderToBack from "../../components/headerToBack/HeaderToBack"
import Video_card from "../../components/video_card/Video_card"
import Slider_Shorts from "../../components/slider_shorts/Slider_Shorts";
import HistoricoService from "../../service/Engajamento/HistoricoService";
import VideoService from "../../service/Video/VideoService";
import { Carousel } from "bootstrap";
import CarouselShorts from "./carouselShorts/CarouselShorts";
import Shortcard from "../../components/short_card/ShortCard";

const Historic = () => {

    // videos que vão vir da HistoricService 
    const [videoHistoric, setVideoHistoric] = useState([]);

    // shorts que vão vir da HistoricService 
    const [shortHistoric, setShortHistoric] = useState([]);

    // responsividade
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    useEffect(() => {
        const func = async () => {

            VideoService.buscarHistorico(99999, 0, false).then(
                (res) => {
                    console.log(res)
                    setVideoHistoric(res);
                }
            );
            VideoService.buscarHistorico(99999, 0, true).then(
                (res) => {
                    setShortHistoric(res);
                }
            );
        }

        func()
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
        <div className="historic__container">
            <HeaderToBack text={"Histórico"} route={"/"} />
            {
                videoHistoric
                    ?
                    <div className="historic__data">
                        {shortHistoric &&
                            <div className="container__slider__shorts__historic">
                                <CarouselShorts shorts={shortHistoric} />
                            </div>
                        }
                        {videoHistoric &&
                            <div className="container__videos__historic__mob">
                                {videoHistoric.map((video) => (
                                    <Video_card key={video.id} video={video} />
                                ))}
                            </div>
                        }
                    </div>
                    :
                    <span>Você ainda não viu nenhum vídeo</span>
            }
        </div>
    )

    const renderTabletView = () => (
        <div className="historic__container">
            <HeaderToBack text={"Histórico"} route={"/"} />
            {
                videoHistoric
                    ?
                    <div className="historic__data">
                        {shortHistoric &&
                            <div className="container__slider__shorts__historic">
                                <CarouselShorts shorts={shortHistoric} />
                            </div>
                        }
                        {videoHistoric &&
                            <div className="container__videos__historic__tablet">
                                {videoHistoric.map((video) => (
                                    <Video_card key={video.id} video={video} />
                                ))}
                            </div>
                        }
                    </div>
                    :
                    <span>Você ainda não viu nenhum vídeo</span>
            }
        </div>
    )

    const renderDesktopView = () => (
        <div className="historic__container">
            <HeaderToBack text={"Histórico"} route={"/"} />
            {
                videoHistoric
                    ?
                    <div className="historic__data">
                        {shortHistoric &&
                            <div className="container__slider__shorts__historic">
                                {shortHistoric.map((short) => (
                                    <Shortcard key={short.id} short={short} />
                                ))}
                                {/* <CarouselShorts shorts={shortHistoric} /> */}
                            </div>
                        }
                        {videoHistoric &&
                            <div className="container__videos__historic__desktop">
                                {videoHistoric.map((video) => (
                                    <Video_card key={video.id} video={video} />
                                ))}
                            </div>
                        }
                    </div>
                    :
                    <span>Você ainda não viu nenhum vídeo</span>
            }
        </div>
    )

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
export default Historic