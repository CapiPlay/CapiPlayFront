import "./ResultSearch.css"
import TagsCarousel from "../../components/tagsCarousel/TagsCarousel";
import { FiFilter } from "react-icons/fi"
import { useState } from "react";
const ResultSearch = () => {

    const [openFilter, setOpenFilter] = useState(false);

    return (
        <div className="container__result__search">
            <div className="tags__carousel__search">
                <TagsCarousel />
            </div>
            <div className="container__filter" onClick={() => setOpenFilter(!openFilter)}>
                <span>Filtros</span>
                <FiFilter />
            </div>
            {
                openFilter &&
                <>
                    <table>
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
                            <tr>Hoje</tr>
                            <tr>Esta semana</tr>
                            <tr>Este mês</tr>
                            <tr>Este ano</tr>
                        </td>
                        <td>
                            <tr>Hoje</tr>
                            <tr>Esta semana</tr>
                            <tr>Este mês</tr>
                            <tr>Este ano</tr>
                        </td>
                    </table>
                </>
            }
        </div>
    )
}
export default ResultSearch;