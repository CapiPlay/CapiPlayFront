import "./Historic.css"
import { useState } from "react"
import { format } from 'date-fns';
import HeaderToBack from "../../components/headerToBack/HeaderToBack"
import Video_card from "../../components/video_card/Video_card"
import CarouselShorts from "./carouselShorts/CarouselShorts";

const Historic = () => {

    // videos que vão vir da HistoricService 
    const [videoHistoric, setVideoHistoric] = useState([]);

    // shorts que vão vir da HistoricService 
    // *pode haver mudanças em como o short será renderizado
    const [shortHistoric, setShortHistoric] = useState([]);

    // formato de data exemplar
    const dateTest = new Date("2023-05-18")
    const dateFormat = 'dd/MM/yy';

    return (
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
                            <CarouselShorts />
                        }
                        {videoHistoric &&
                            <div className="container__videos__historic">
                                <Video_card />
                                <Video_card />
                                <Video_card />
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