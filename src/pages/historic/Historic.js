import "./Historic.css"
import { useEffect, useState } from "react"

// Componentes
import VideoService from "../../service/Video/VideoService";
import CarouselShorts from "./carouselShorts/CarouselShorts";
import Video_card from "../../components/video_card/Video_card"
import HeaderToBack from "../../components/headerToBack/HeaderToBack"
import Slider_Shorts from "../../components/slider_shorts/Slider_Shorts";
import Shortcard from "../../components/short_card/ShortCard";

const Historic = () => {

    // videos que vão vir da HistoricService 
    const [videoHistoric, setVideoHistoric] = useState([]);

    // shorts que vão vir da HistoricService 
    const [shortHistoric, setShortHistoric] = useState([]);

    useEffect(() => {
        const func = async () => {

            // histórico de vídeos 
            VideoService.buscarHistorico(99999, 0, false).then(
                (res) => {
                    console.log(res)
                    setVideoHistoric(res);
                }
            );

            // histórico de shorts
            // VideoService.buscarHistorico(99999, 0, true).then(
            //     (res) => {
            //         console.log(res)
            //         setShortHistoric(res);
            //     }
            // );
        }

        func()

    }, []);

    // const shortModelo = {
    //     uuid: "266db082-19fb-401f-9bb4-a5acc7b9d104",
    //     titulo: "shorts 7",
    //     views: 641,
    //     caminhos: [
    //         "266db082-19fb-401f-9bb4-a5acc7b9d104\\miniatura_R154X268_16109325466902258579.png",
    //         "266db082-19fb-401f-9bb4-a5acc7b9d104\\miniatura_R200X348_2118668852143256695.png",
    //         "266db082-19fb-401f-9bb4-a5acc7b9d104\\miniatura_R230X388_7225584572262403118.png",
    //         "266db082-19fb-401f-9bb4-a5acc7b9d104\\miniatura_R340X193_9521849253321644897.png",
    //         "266db082-19fb-401f-9bb4-a5acc7b9d104\\miniatura_R380X193_7561546722578769743.png",
    //         "266db082-19fb-401f-9bb4-a5acc7b9d104\\video_17459721639776213265.mp4"
    //     ]

    // }

    return (
        <div className="historic__container">
            <HeaderToBack text={"Histórico"} route={"/"} />
            {/* <Shortcard short={shortModelo} /> */}
            {
                videoHistoric
                    ?
                    <div className="historic__data">
                        {shortHistoric &&
                            <div className="container__slider__shorts__historic">
                                <Slider_Shorts  />
                            </div>

                        }
                        {videoHistoric &&
                            <div className="container__videos__historic__mob">
                                {videoHistoric.map((video) => (
                                    <div>
                                        <Video_card key={video.id} video={video} />
                                    </div>
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