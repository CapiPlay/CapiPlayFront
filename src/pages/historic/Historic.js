import "./Historic.css"

import { useEffect, useState } from "react"
import { format } from 'date-fns';

// Componentes
import HeaderToBack from "../../components/headerToBack/HeaderToBack"
import Video_card from "../../components/video_card/Video_card"
import Slider_Shorts from "../../components/slider_shorts/Slider_Shorts";
import HistoricoService from "../../service/Engajamento/HistoricoService";
import VideoService from "../../service/Video/VideoService";

const Historic = () => {

    // videos que vão vir da HistoricService 
    const [videoHistoric, setVideoHistoric] = useState([]);

    // shorts que vão vir da HistoricService 
    // *pode haver mudanças em como o short será renderizado
    const [shortHistoric, setShortHistoric] = useState([]);

    // formato de data exemplar
    const dateTest = new Date("2023-05-18")
    const dateFormat = 'dd/MM/yy';

    // responsividade
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    useEffect(() => {

        HistoricoService.buscarTodosPorUsuario().then((res) => {
            res.forEach((r1) => {
                VideoService.buscarTodos(10, 0, false).then((resVideo) => {
                    const arr = [];
                    resVideo.content.forEach((video) => {
                        if (video.uuid === r1.idVideo.id) {
                            arr.push(video)
                        }
                    })
                    setVideoHistoric([...arr])
                })
            })
        })


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
                        <div>
                            <span>{format(dateTest, dateFormat)}</span>
                        </div>
                        {shortHistoric &&
                            <div className="container__slider__shorts__historic">
                                <Slider_Shorts />
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
                        <div>
                            <span>{format(dateTest, dateFormat)}</span>
                        </div>
                        {shortHistoric &&
                            <div className="container__slider__shorts__historic">
                                <Slider_Shorts />
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
                        <div>
                            <span>{format(dateTest, dateFormat)}</span>
                        </div>
                        {shortHistoric &&
                            <div className="container__slider__shorts__historic">
                                <Slider_Shorts />
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