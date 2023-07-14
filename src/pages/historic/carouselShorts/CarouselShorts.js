import React, { useState } from 'react';
import Slider from 'react-slick';
import { DraggableCore } from 'react-draggable';

import "./CarouselShorts.css";
import { useEffect, useRef } from 'react';
import Shortcard from '../../../components/short_card/ShortCard';


const CarouselShorts = () => {

    const sliderRef = useRef(null);
    const [shorts, setShorts] = useState([]); 

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
        infinite: true,
        slidesToShow: 2.3,
        slidesToScroll: 2.3,
        className: 'horizontal-carousel',
    };

    useEffect(() => {
        sliderRef.current.slickGoTo(0);
    }, [shorts]);

    // object exemplar 
    const short = [{
        title: "short1", 
        views: "1000", 
        img: ""
    }]

    return (
        <DraggableCore axis="x" onDrag={handleDrag}>
            <Slider ref={sliderRef}{...settings}>
                <Shortcard/>
            </Slider>
        </DraggableCore>
    );

}
export default CarouselShorts;