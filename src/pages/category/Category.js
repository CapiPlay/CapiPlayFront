import React from 'react'
import './Category.css'
import Header from '../../components/header/Header';
import { useState } from 'react';
import { useEffect } from 'react';

function Category() {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderDesktopView = () => {
        <>
            <Header />
            

        </>
    }

    const renderTabletView = () => {
        <>
            <Header />

        </>
    }

    const renderMobileView = () => {
        <>
            <Header />

        </>

    }


    const getViewToRender = () => {
        if (screenSize.width > 900) {
            return renderDesktopView();
        } else if (screenSize.width < 900 && screenSize.width > 500) {
            return renderTabletView();
        } else {
            return renderMobileView();
        }
    };

    return <>{getViewToRender()}</>;


}

export default Category