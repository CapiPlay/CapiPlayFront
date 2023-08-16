import Slider from "react-slick";
import "./TagsCarousel.css"
import { useRef } from "react";
import { DraggableCore } from "react-draggable";
import { useEffect } from "react";

const TagsCarousel = () => {

    const sliderRef = useRef(null);

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
        slidesToShow: 2.7,
        slidesToScroll: 2.7,
        className: 'horizontal-carousel',
    };

    const tags = [
        "Roupas brancas",
        "Henrique e Juliano",
        "Comidas japonesas",
        "Seriados antigos"
    ]

    useEffect(() => {
        sliderRef.current.slickGoTo(0);
    }, [tags]);

    return (
        <DraggableCore axis="x" onDrag={handleDrag}>
            <Slider ref={sliderRef}{...settings}>
                    {tags && tags.map((tag) => (
                        <div className="tags__search">
                            <span>{tag}</span>
                        </div>
                    ))}
            </Slider>
        </DraggableCore>
    )
}

export default TagsCarousel;