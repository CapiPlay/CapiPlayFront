import "./CarouselShorts.css";
import { useEffect, useRef } from 'react';
import { DraggableCore } from 'react-draggable';
import Shortcard from '../../../components/short_card/ShortCard';
import Slider from 'react-slick';

// imagem exemplar
import imgShort from "../../../assets/image/img_shorts.png"

const CarouselShorts = () => {

    const sliderRef = useRef(null);
    // const [shorts, setShorts] = useState([]);

    const handleDrag = (e, drag) => {
        const distanceThreshold = 100;
        if (drag.deltaX < -distanceThreshold) {
            sliderRef.current.slickNext();
        } else if (drag.deltaX > distanceThreshold) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 2.3,
        slidesToScroll: 2.3,
        className: 'horizontal-carousel',
    };


    // lista de shorts exemplar 
    const shorts = [{
        img: imgShort,
        title: "Como montar rapidamente um cubo mágico",
        views: 17,
    },
    {
        img: imgShort,
        title: "Como montar rapidamente um cubo mágico",
        views: 17604,
    },
    {
        img: imgShort,
        title: "Como montar rapidamente um cubo mágico",
        views: 199846,
    },
    {
        img: imgShort,
        title: "Como montar rapidamente um cubo mágico",
        views: 1760467,
    },
    ]

    useEffect(() => {
        sliderRef.current.slickGoTo(0);
    }, [shorts]);

    return (
        <DraggableCore axis="x" onDrag={handleDrag}>
            <Slider ref={sliderRef}{...settings}>
                {shorts && shorts.map((short) => {
                    return <Shortcard short={short} />
                })}
            </Slider>
        </DraggableCore>
    );

}
export default CarouselShorts;