import "./ShortCard.css"
import numeral from "numeral";

const Shortcard = ({ short }) => {

    return (
        <div className="container__short__card">
            <img src={short.img} />
            <div className="container__informations__shorts">
                <span>{short.title}</span>
                {short.views > 999
                    ?
                    <span>
                        {numeral(short.views).format('0.0a')} de visualizações
                    </span>
                    :
                    <span>
                        {short.views} visualizações
                    </span>
                }
            </div>
        </div>
    )
}
export default Shortcard; 