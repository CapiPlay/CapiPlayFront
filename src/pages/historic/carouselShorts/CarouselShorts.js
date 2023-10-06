import "./CarouselShorts.css";
import { useEffect, useRef } from 'react';
import { DraggableCore } from 'react-draggable';
import Shortcard from '../../../components/short_card/ShortCard';
import Slider from 'react-slick';

const CarouselShorts = ({ shorts }) => {

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
        slidesToShow: 2.3,
        slidesToScroll: 2.3,
        className: 'horizontal-carousel',
    };
    
    useEffect(() => {
        sliderRef.current.slickGoTo(0);
    }, [shorts]);

    return (
        <DraggableCore axis="x" onDrag={handleDrag}>
            <div className="container__capi__shorts">
                <span>CapiShorts</span>
                <Slider ref={sliderRef}{...settings}>
                    {shorts && shorts.map((short) => {
                        return <Shortcard short={short} />
                    })}
                </Slider>
            </div>
        </DraggableCore>
    );

}
export default CarouselShorts;