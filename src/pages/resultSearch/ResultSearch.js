import "./ResultSearch.css"
import TagsCarousel from "../../components/tagsCarousel/TagsCarousel";
import { FiFilter } from "react-icons/fi"
import { useState } from "react";
import HeaderSearch from "../../components/headerSearch/HeaderSearch";
import Video_card from "../../components/video_card/Video_card";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { vi } from "date-fns/locale";
import Header from "../../components/header/Header";
import Side_Bar from "../home/side_bar/Side_Bar";
const ResultSearch = () => {

    const [openFilter, setOpenFilter] = useState(false);
    const [defaultFilter, setDefaultFilter] = useState(false);
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });


    const nav = useNavigate();
    const location = useLocation();

    const urlSearchParams = new URLSearchParams(location.search);
    const [searchValue, setSearchValue] = useState("");
    const searchParams = urlSearchParams.get("search");


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



    useEffect(() => {
        setSearchValue(searchParams);
        console.log(videos[0].caminhos[4])
    }, [searchParams])

    // const renderVideosDesktop = () => {
    //     return (
    //         <div className="container__videos__result">
    //             <div></div>
    //             <div></div>
    //         </div>
    //     )
    // }
    const videos = [{
        caminhos: [
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R154X268_9164846223788002675.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R200X348_13358526845566702011.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R230X388_15816350250600018926.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R340X193_6524793299455106252.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R380X193_14437519966982145443.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\video_4269096256195136619.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R154X268_9164846223788002675.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R200X348_13358526845566702011.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R230X388_15816350250600018926.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R340X193_6524793299455106252.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R380X193_14437519966982145443.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\video_4269096256195136619.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R154X268_9164846223788002675.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R200X348_13358526845566702011.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R230X388_15816350250600018926.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R340X193_6524793299455106252.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R380X193_14437519966982145443.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\video_4269096256195136619.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R154X268_9164846223788002675.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R200X348_13358526845566702011.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R230X388_15816350250600018926.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R340X193_6524793299455106252.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R380X193_14437519966982145443.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\video_4269096256195136619.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R154X268_9164846223788002675.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R200X348_13358526845566702011.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R230X388_15816350250600018926.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R340X193_6524793299455106252.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\miniatura_R380X193_14437519966982145443.png",
            "0c3bf232-6412-4e6c-a6b3-16c37c5c0540\\video_4269096256195136619.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    }
    ];

    const renderFilter = () => {
        return (
            <div className="container__table__filter"
                style={openFilter ?
                    { animation: "open-filter .5s forwards ease-out" }
                    :
                    defaultFilter ? { animation: "close-filter .5s forwards ease-out" } : { opacity: 0 }}>
                <table className="table__filters">
                    <tr className="table__header__filter">
                        <th>Data</th>
                        <th>Duração</th>
                        <th>Tipo</th>
                    </tr>
                    <td>
                        <tr>Hoje</tr>
                        <tr>Esta semana</tr>
                        <tr>Este mês</tr>
                        <tr>Este ano</tr>
                    </td>
                    <td>
                        <tr>Menos de 5min.</tr>
                        <tr>De 5 a 20min.</tr>
                        <tr>Mais de 20min.</tr>
                    </td>
                    <td>
                        <tr>Vídeo</tr>
                        <tr>CapiShorts</tr>
                        <tr>Canal</tr>
                    </td>
                </table>
            </div>
        )
    }

    const renderDesktop = () => {
        return (
            <>
                <Side_Bar />
                <div className="container__header__search__desktop">
                    <Header />
                </div>
                <div className="container__tags__search__desktop">
                    <TagsCarousel />
                </div>
                <div className="container__filter" onClick={() => { setOpenFilter(!openFilter); setDefaultFilter(true) }}>
                    <span>Filtros</span>
                    <FiFilter />
                </div>
                {renderFilter}
                <div className="container__videos__result">
                    {videos.map((video) => (
                        <div className="video__result__search">
                            <Video_card video={video} />
                        </div>
                    ))}
                </div>
            </>

        )
    }

    const renderTabletView = () => {
        return (
            <div className="container__result__search">
                <HeaderSearch
                    valueInput={searchValue}
                    functionBack={() => nav("/")} />
                <div className="tags__carousel__search">
                </div>
                <TagsCarousel />
                <div className="container__filter" onClick={() => { setOpenFilter(!openFilter); setDefaultFilter(true) }}>
                    <span>Filtros</span>
                    <FiFilter />
                </div>
                {renderFilter}
                <div className="container__videos__result">
                    {videos.map((video) => (
                        <div className="video__result__search">
                            <Video_card video={video} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }


    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktop();
        } else {
            return renderTabletView();
        }
    };

    return <>{getViewToRender()}</>;
}
export default ResultSearch;