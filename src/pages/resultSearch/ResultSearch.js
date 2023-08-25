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
import Slider_Category from "../home/slider_category/Slider_Category";
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

    const videos = [{
        caminhos: [
            "1704d203-5b34-4ed9-9283-c57158bacbf8\\miniatura_R154X268_11697125657336416341.png",
            "1704d203-5b34-4ed9-9283-c57158bacbf8\\miniatura_R200X348_6878981770652736747.png",
            "1704d203-5b34-4ed9-9283-c57158bacbf8\\miniatura_R230X388_9361341031213374615.png",
            "1704d203-5b34-4ed9-9283-c57158bacbf8\\miniatura_R340X193_9219148671596789975.png",
            "1704d203-5b34-4ed9-9283-c57158bacbf8\\miniatura_R380X193_12581456805505636758.png",
            "1704d203-5b34-4ed9-9283-c57158bacbf8\\video_2578350259357151491.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "83332fb0-7a8f-4b26-b2b8-58a719d07152\\miniatura_R154X268_1148387358269743337.png",
			"83332fb0-7a8f-4b26-b2b8-58a719d07152\\miniatura_R200X348_1815036189906823964.png",
			"83332fb0-7a8f-4b26-b2b8-58a719d07152\\miniatura_R230X388_3533859505980465547.png",
			"83332fb0-7a8f-4b26-b2b8-58a719d07152\\miniatura_R340X193_5072361480399494154.png",
			"83332fb0-7a8f-4b26-b2b8-58a719d07152\\miniatura_R380X193_95036715129770923.png",
			"83332fb0-7a8f-4b26-b2b8-58a719d07152\\video_14988957158581530481.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R154X268_7478500415072241355.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R200X348_5866358373415366753.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R230X388_15903921073760648855.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R340X193_11053981639284794552.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R380X193_15551205469361886336.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\video_16496170581419065986.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R154X268_7478500415072241355.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R200X348_5866358373415366753.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R230X388_15903921073760648855.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R340X193_11053981639284794552.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R380X193_15551205469361886336.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\video_16496170581419065986.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R154X268_7478500415072241355.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R200X348_5866358373415366753.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R230X388_15903921073760648855.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R340X193_11053981639284794552.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R380X193_15551205469361886336.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\video_16496170581419065986.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R154X268_7478500415072241355.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R200X348_5866358373415366753.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R230X388_15903921073760648855.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R340X193_11053981639284794552.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\miniatura_R380X193_15551205469361886336.png",
			"e0f83cbf-277d-477e-b81f-d578bcae8dc5\\video_16496170581419065986.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    }
    ];

    const renderDesktop = () => {
        return (
            <>
                <Side_Bar />
                <div className="container__header__search__desktop">
                    <Header />
                </div>
                <div className="container__tags__search__desktop">
                    <Slider_Category/>
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

    const renderTabletMobileView = () => {
        return (
            <div className="container__result__search">
                <HeaderSearch
                    valueInput={searchValue}
                    functionBack={() => nav("/")} />
                <div className="tags__carousel__search">
                </div>
                <TagsCarousel />
                <div className="container__filter" onClick={() => { setOpenFilter(true); setDefaultFilter(true); }}>
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

    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktop();
        } else {
            return renderTabletMobileView();
        }
    };

    return <>{getViewToRender()}</>;
}
export default ResultSearch;