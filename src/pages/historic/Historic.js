import "./Historic.css"
import { useEffect, useState } from "react"

// Componentes
import VideoService from "../../service/Video/VideoService";
import Video_card from "../../components/video_card/Video_card"
import HeaderToBack from "../../components/headerToBack/HeaderToBack"
import Shortcard from "../../components/short_card/ShortCard";

const Historic = () => {

    // videos que vão vir da HistoricService 
    const [videoHistoric, setVideoHistoric] = useState([]);


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
            // VideoService.buscarHistorico(1, 1, true).then(
            //     (res) => {
            //         console.log(res)
            //         setShortHistoric(res);
            //     }
            // );
        }

        func()

    }, []);

    const shortModelo = {
        duracao: 16,
        publicacao: "2023-09-05",
        shorts: true,
        titulo: "shorts 2",
        curtidas: 1,
        visualizacoes: 649,
        categoria: "ESPORTES",
        uuid: "02b29960-5098-4452-acc4-d5c24146372e",
        caminhos: [
            "02b29960-5098-4452-acc4-d5c24146372e\\miniatura_R154X268_8432913452328941688.png",
            "02b29960-5098-4452-acc4-d5c24146372e\\miniatura_R200X348_4682049452551627663.png",
            "02b29960-5098-4452-acc4-d5c24146372e\\miniatura_R230X388_8041872667063717547.png",
            "02b29960-5098-4452-acc4-d5c24146372e\\miniatura_R340X193_16118392655351469333.png",
            "02b29960-5098-4452-acc4-d5c24146372e\\miniatura_R380X193_7644675720426672719.png",
            "02b29960-5098-4452-acc4-d5c24146372e\\video_4244732591020306533.mp4"
        ]
    }

    return (
        <div className="historic__container">
            <HeaderToBack text={"Histórico"} route={"/"} />
            <Shortcard short={shortModelo} />
            {
                videoHistoric
                    ?
                    <div className="historic__data">
                        {/* {shortHistoric &&
                            <div className="container__slider__shorts__historic">
                                <CarouselShorts shorts={shortHistoric}/>
                            </div>

                        } */}
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