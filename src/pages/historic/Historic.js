import "./Historic.css"
import { useEffect, useState } from "react"

// Componentes
import VideoService from "../../service/Video/VideoService";
import CarouselShorts from "./carouselShorts/CarouselShorts";
import Shortcard from "../../components/short_card/ShortCard";
import Video_card from "../../components/video_card/Video_card"
import HeaderToBack from "../../components/headerToBack/HeaderToBack"

const Historic = () => {

    // videos que vão vir da HistoricService 
    const [videoHistoric, setVideoHistoric] = useState([]);

    // shorts que vão vir da HistoricService 
    const [shortHistoric, setShortHistoric] = useState([]);

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
                    console.log(res)
                    setShortHistoric(res);
                }
            );
        }

        func()

    }, []);

    return (
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
}
export default Historic