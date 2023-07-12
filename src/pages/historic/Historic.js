import "./Historic.css"
import { useState } from "react"
import { format } from 'date-fns';
import HeaderToBack from "../../components/headerToBack/HeaderToBack"
import Video_card from "../../components/video_card/Video_card"

const Historic = () => {

    const [shorts, setShorts] = useState([]);
    const [videos, setVideos] = useState([
        {
            uuid: 1,
            caminho: "",
            descricao: "descricao video 1",
            titulo: "titulo video 1",
            tags: [{}],
            categoria: {},
            date: new Date('2023-07-10')
        },
        {
            uuid: 2,
            caminho: "",
            descricao: "descricao video 2",
            titulo: "titulo video 2",
            tags: [{}],
            categoria: {},
            date: new Date('2023-07-09')
        }
    ]);

    const dateTest = new Date("2023-05-18")
    const dateFormat = 'dd/MM/yy';

    const addToHistoric = (video) => {
        const videoDate = { ...video, date: new Date() };
        setVideos((prevVideos) => [videoDate, ...prevVideos])
    }

    const videotest = {
        caminho: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
    }

    return (
        <div className="historic__container">
            <HeaderToBack text={"Histórico"} route={"/"} />
            {
                videos || shorts
                    ?
                    <div className="historic__date">
                        <span>{format(dateTest, dateFormat)}</span>
                        <Video_card video={videotest}/>
                        {shorts != null &&
                            <div className="container__shorts__historic">
                                <div></div>
                                <div></div>
                            </div>
                        }
                        {videos &&
                            <div className="container__videos__historic">
                                {videos.map((video) => {
                                    <>
                                        <h3>{video.title}</h3>
                                        <span>{video.descricao}</span>
                                        <span>{format(video.date, dateFormat)}</span>
                                    </>
                                })}
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