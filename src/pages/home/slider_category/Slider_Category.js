import React, { useEffect, useState } from 'react'
import './Slider_Category.css'
import Slider from 'react-slick';
import VideoService from '../../../service/Video/VideoService';
import { Link } from 'react-router-dom';

function Slider_Category() {

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [tags, setTags] = useState([]);

  const settingsDesk = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
        }
      }
    ]
  };

  const settingsTablet = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    getTags();
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getTags = async () => {
    const tags = await VideoService.buscarTags();
    if (tags?.length > 0) {
      setTags(tags);
    }
  }

  const renderDesktopView = () => (
    <Slider {...settingsDesk}>
      {tags.map((tag, index) => (
        <Link to="/" className='text_decoration' key={tag}>
          <h3 className={index === tag ? 'container__banner__large__category' : 'container__banner__category'} >
            #{tag.tag}
          </h3>
        </Link>
      ))}
    </Slider>
  );

  const renderTabletView = () => (
    <Slider {...settingsTablet}>
      {tags.map((tag, index) => (
        <Link to="/" className='text_decoration' key={tag}>
          <h3 className={index === tag ? 'container__banner__large__category__tablet' : 'container__banner__category__tablet'} >
            #{tag.tag}
          </h3>
        </Link>
      ))}
    </Slider>
  );


  const getViewToRender = () => {
    if (screenSize.width > 900) {
      return renderDesktopView();
    } else if (screenSize.width < 900 && screenSize.width > 500) {
      return renderTabletView();
    } else {
      return null;
    }
  };

  return <>{getViewToRender()}</>;

};

export default Slider_Category