import "./Search.css"
import { useLocation, useNavigate } from "react-router-dom";

// ícones
import { MdRestartAlt } from "react-icons/md"
import { BiSearchAlt2 } from "react-icons/bi"

// componentes
import { useEffect, useState } from "react";
import HeaderSearch from "../../components/headerSearch/HeaderSearch";
import VideoService from "../../service/Video/VideoService";

const Search = ({ change, searches, setSearches, setLastSearches }) => {
    const nav = useNavigate();
    const [back, setBack] = useState(false);

    const location = useLocation();
    const urlSearchParams = new URLSearchParams(location.search);
    const searchParams = urlSearchParams.get("search");
    // const [valueInput, setValueInput] = useState(searchParams ? String(searchParams) : valueSearch ? valueSearch : "");
    
    const handleSearch = (value) => {
        nav(`/result-search?search=${encodeURIComponent(value)}`)
    }

    useEffect(() => {
        VideoService.buscarHistoricoPesquisa().then(
            (res) => {
                setSearches([...Array.from(
                    new Set(res.map(video => video.pesquisa))
                ).map(pesquisa => {
                    return res.find(video => video.pesquisa=== pesquisa);
                })].slice(0, 11));
                setLastSearches([...Array.from(
                    new Set(res.map(video => video.pesquisa))
                ).map(pesquisa => {
                    return res.find(video => video.pesquisa=== pesquisa);
                })].slice(0, 11));
            }
        )
    }, [])

    const renderSearch = () => {
        // valueInput?.trim() === '' && 
        // if (searches.length === 0) {

            return (    
                <>
                    {searches.map((search) => (
                        <div className="search__box" onClick={() => handleSearch(search.pesquisa)}>
                            <MdRestartAlt className="icons__search" />
                            <span>{search.pesquisa}</span>
                        </div>
                    ))}
                </>
            )
            // return (
            //     <>
            //         {lastSearches && lastSearches.map((lastSearch) => (
            //             <div className="search__box" onClick={() => handleSearch(lastSearch.pesquisa)}>
            //                 <MdRestartAlt className="icons__search" />
            //                 <span>{lastSearch.pesquisa}</span>
            //             </div>
            //         ))}
            //     </>
            // )
        // } 
    }

    return (
        <div className="container__search" style={{ display: back ? "none" : "block" }}>
            {window.innerWidth <= 900
                &&
                <HeaderSearch
                    handleSearch={handleSearch}
                    handleChange={change}
                    functionBack={() => setBack(!back)} />
            }
            {renderSearch()}
        </div>
    )

}
export default Search; 