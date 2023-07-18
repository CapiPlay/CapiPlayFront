import React, { useState } from 'react';
import Slider from 'react-slick';
import { DraggableCore } from 'react-draggable';

import imgShort from "../../../assets/image/img_shorts.png"

import "./CarouselShorts.css";
import { useEffect, useRef } from 'react';
import Shortcard from '../../../components/short_card/ShortCard';


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
        infinite: true,
        slidesToShow: 2.3,
        slidesToScroll: 2.3,
        className: 'horizontal-carousel',
    };


    // lista de shorts exemplar 
    const shorts = [{
        title: "short1",
        views: "1000",
        img: imgShort
    },
    {
        title: "short2",
        views: "1000",
        img: imgShort
    },
    {
        title: "short3",
        views: "1000",
        img: imgShort
    }]

    useEffect(() => {
        sliderRef.current.slickGoTo(0);
    }, [shorts]);

    return (
        <DraggableCore axis="x" onDrag={handleDrag}>
            <Slider ref={sliderRef}{...settings}>
                {/* {shorts && shorts.map((short) => {
                })} */}
                <Shortcard />
                <Shortcard />
                <Shortcard />
                <Shortcard />
            </Slider>
        </DraggableCore>
    );

}
export default CarouselShorts;