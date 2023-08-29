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

    useEffect(() => {
        setDefaultFilter(false);
    }, [openFilter]);


    const videos = [{
        caminhos: [
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R154X268_16007316079386702043.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R200X348_8034148744957898250.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R230X388_3532971991782170780.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R340X193_7523822937632451934.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R380X193_9789993892227719100.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\video_13072447084527919513.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R154X268_16007316079386702043.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R200X348_8034148744957898250.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R230X388_3532971991782170780.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R340X193_7523822937632451934.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R380X193_9789993892227719100.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\video_13072447084527919513.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R154X268_16007316079386702043.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R200X348_8034148744957898250.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R230X388_3532971991782170780.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R340X193_7523822937632451934.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R380X193_9789993892227719100.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\video_13072447084527919513.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R154X268_16007316079386702043.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R200X348_8034148744957898250.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R230X388_3532971991782170780.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R340X193_7523822937632451934.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R380X193_9789993892227719100.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\video_13072447084527919513.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R154X268_16007316079386702043.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R200X348_8034148744957898250.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R230X388_3532971991782170780.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R340X193_7523822937632451934.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R380X193_9789993892227719100.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\video_13072447084527919513.mp4"
        ],
        titulo: "titulo",
        uuid: "2"
    },
    {
        caminhos: [
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R154X268_16007316079386702043.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R200X348_8034148744957898250.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R230X388_3532971991782170780.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R340X193_7523822937632451934.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\miniatura_R380X193_9789993892227719100.png",
            "075ca30e-96df-42a2-aaf8-7e2a63a7a98b\\video_13072447084527919513.mp4"
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
                    <Slider_Category />
                </div>
                <div className="container__filter__desktop" onClick={() => { setOpenFilter(!openFilter); }}>
                    <span>Filtros</span>
                    <FiFilter />
                </div>
                {renderFilter()}
                <div className="container__videos__result__desktop">
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
                <div className="container__tags__search">
                    <TagsCarousel />
                </div>
                <div className="container__filter" onClick={() => { setOpenFilter(!openFilter); }}>
                    <span>Filtros</span>
                    <FiFilter />
                </div>
                {renderFilter()}
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
                    { opacity: 0 }}>
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