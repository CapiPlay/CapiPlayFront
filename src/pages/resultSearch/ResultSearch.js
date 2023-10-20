import "./ResultSearch.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// components
import TagsCarousel from "../../components/tagsCarousel/TagsCarousel";
import HeaderSearch from "../../components/headerSearch/HeaderSearch";
import Video_card from "../../components/video_card/Video_card";
import Header from "../../components/header/Header";
import Side_Bar from "../../components/side_bar/Side_Bar";
import Slider_Category from "../home/slider_category/Slider_Category";

// icons
import { FiFilter } from "react-icons/fi";
import VideoService from "../../service/Video/VideoService";

const ResultSearch = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [defaultFilter, setDefaultFilter] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [videos, setVideos] = useState([]);

  const nav = useNavigate();
  const location = useLocation();

  const urlSearchParams = new URLSearchParams(location.search);
  const [searchValue, setSearchValue] = useState("");
  const searchParams = urlSearchParams.get("search");

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setSearchValue(searchParams);
    const pesquisar = async () => {
      const response = await VideoService.pesquisarValor(searchParams, false);
      setVideos(response);
    };
    pesquisar();
  }, []);

  useEffect(() => {
    setDefaultFilter(false);
  }, [openFilter]);

  const handleChange = (e) => {
    console.log(e);
    setSearchValue(e.target.value);
  };

  const handleSearch = (value) => {
    if (value === null || value === undefined || value === "") {
        return
    }
    nav(
      `/result-search?search=${encodeURIComponent(
        value && value.length > 0 ? value : searchValue
      )}`
    );
  };

  const renderDesktop = () => {
    return (
      <>
        <Side_Bar />
        <div className="container__header__search__desktop">
          <Header searchValue={searchValue} />
        </div>
        <div className="container__tags__search__desktop">
          <Slider_Category />
        </div>
        <div
          className="container__filter__desktop"
          onClick={() => {
            setOpenFilter(!openFilter);
          }}
        >
          <span>Filtros</span>
          <FiFilter />
        </div>
        {renderFilter()}
        <div className="container__videos__result__desktop">
          {videos &&
            videos.map((video) => (
              <div className="video__result__search">
                <Video_card video={video} />
              </div>
            ))}
        </div>
      </>
    );
  };

  const renderTabletMobileView = () => {
    return (
      <div className="container__result__search">
        <HeaderSearch
          handleSearch={handleSearch}
          valueInput={searchValue}
          handleChange={handleChange}
          functionBack={() => nav("/")}
        />
        <div className="container__tags__search">
          <TagsCarousel />
        </div>
        <div
          className="container__filter"
          onClick={() => {
            setOpenFilter(!openFilter);
          }}
        >
          <span>Filtros</span>
          <FiFilter />
        </div>
        {renderFilter()}
        <div className="container__videos__result">
          {videos &&
            videos.map((video) => (
              <div className="video__result__search">
                <Video_card video={video} />
              </div>
            ))}
        </div>
      </div>
    );
  };

  const renderFilter = () => {
    return (
      <div
        className="container__table__filter"
        style={
          openFilter
            ? { animation: "open-filter .5s forwards ease-out" }
            : { opacity: 0 }
        }
      >
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
    );
  };

  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktop();
    } else {
      return renderTabletMobileView();
    }
  };

  return <>{getViewToRender()}</>;
};
export default ResultSearch;
