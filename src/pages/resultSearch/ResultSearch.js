import "./ResultSearch.css"
import TagsCarousel from "../../components/tagsCarousel/TagsCarousel";
import { FiFilter } from "react-icons/fi"
import { useState } from "react";
import HeaderSearch from "../../components/headerSearch/HeaderSearch";
import Video_card from "../../components/video_card/Video_card";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const ResultSearch = () => {

    const [openFilter, setOpenFilter] = useState(false);
    const [defaultFilter, setDefaultFilter] = useState(false);

    const nav = useNavigate();
    const location = useLocation();

    const urlSearchParams = new URLSearchParams(location.search);
    const [searchValue, setSearchValue] = useState("");
    const searchParams = urlSearchParams.get("search");

    useEffect(() => {
        setSearchValue(searchParams);
    }, [searchParams])


    return (
        <div className="container__result__search">
            <HeaderSearch
                valueInput={searchValue}
                functionBack={() => nav("/")} />
            <div className="tags__carousel__search">
                <TagsCarousel />
            </div>
            <div className="container__filter" onClick={() => { setOpenFilter(!openFilter); setDefaultFilter(true) }}>
                <span>Filtros</span>
                <FiFilter />
            </div>
            <div className="container__table__filter"
                style={openFilter ?
                    { animation: "open-filter .5s forwards ease-out" }
                    :
                    defaultFilter ? { animation: "close-filter .5s forwards ease-out" } : {}}>
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
            <div className="container__videos__result">
                <Video_card />
                <Video_card />
                <Video_card />
            </div>
        </div>
    )
}
export default ResultSearch;