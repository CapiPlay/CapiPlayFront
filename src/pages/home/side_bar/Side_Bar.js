// styles
import './Side_Bar.css'

// hooks
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// icons
import { TbMovie, TbPlant, TbSchool, TbHanger2, TbChefHat } from 'react-icons/tb'
import { MdOutlineScience, MdOutlineSportsVolleyball } from 'react-icons/md'
import { PiTelevision } from 'react-icons/pi'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { HiOutlineMusicNote } from 'react-icons/hi'
import { LuGamepad2 } from 'react-icons/lu'
import { SlPlane } from 'react-icons/sl'

function Side_Bar() {

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState("")

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
    }

    const handleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }

    const closeSideBar = () => {
        setIsSideBarOpen(false)
    }

    useEffect(() => {
        function handleResize() {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const verifyScreen = () => {
        if (screenSize.width < 500) {
            return false
        } else {
            return true
        }
    }

    return (
        <div className="container__side__bar">
            <div className="category__box">
                <Link 
                to='/category/ARTESECULTURA' 
                className={`modal__category__item__side ${activeCategory === 'ARTESECULTURA' ? 'active__category' : ''}`}
                onClick={() => handleCategoryClick('ARTESECULTURA')}
                >
                    <div>
                        <IoColorPaletteOutline />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Artes e cultura</p> */}
                    </div>
                </Link>
                <Link to='/category/CIENCIAETECNOLOGIA' className={`modal__category__item__side ${activeCategory === 'CIENCIAETECNOLOGIA' ? 'active' : ''}`}>
                    <div >
                        <MdOutlineScience />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Ciências e tecnologia</p> */}
                    </div>
                </Link>
                <Link 
                to='/category/CULINARIA' 
                className={`modal__category__item__side ${activeCategory === 'CULINARIA' ? 'active' : ''}`} 
                
                >
                    <div>
                        <TbChefHat />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Culinária</p> */}
                    </div>
                </Link>
                <Link 
                to='/category/EDUCACAO' 
                className={`modal__category__item__side ${activeCategory === 'EDUCACAO' ? 'active' : ''}`} 
                
                >
                    <div >
                        <TbSchool />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Educação</p> */}
                    </div>
                </Link>
                <Link 
                to='/category/ESPORTES' 
                className={`modal__category__item__side ${activeCategory === 'ESPORTES' ? 'active' : ''}`}
                
                >
                    <div>
                        <MdOutlineSportsVolleyball />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Esportes</p> */}
                    </div>
                </Link>
                <Link 
                to='/category/ENTRETERIMENTO' 
                className={`modal__category__item__side ${activeCategory === 'ENTRETERIMENTO' ? 'active' : ''}`} 
                
                >
                    <div>
                        <PiTelevision />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Entretenimento</p> */}
                    </div>
                </Link>
                <Link 
                to='/category/DOCUMENTARIO' 
                className={`modal__category__item__side ${activeCategory === 'DOCUMENTARIO' ? 'active' : ''}`} 
                
                >
                    <div>
                        <TbMovie />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Documentário</p> */}
                    </div>
                </Link>
                <Link 
                to='/category/JOGOS' 
                className={`modal__category__item__side ${activeCategory === 'JOGOS' ? 'active' : ''}`}
                
                >
                    <div>
                        <LuGamepad2 />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Jogos</p> */}
                    </div>
                </Link>
                <Link 
                to='/category/LIFESTYLE' 
                className={`modal__category__item__side ${activeCategory === 'LIFESTYLE' ? 'active' : ''}`} 
                
                >
                    <div>
                        <TbPlant />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Lifestyle</p> */}
                    </div>
                </Link>
                <Link 
                to='/category/MODAEBELEZA' 
                className={`modal__category__item__side ${activeCategory === 'MODAEBELEZA' ? 'active' : ''}`} 
                
                >
                    <div>
                        <TbHanger2 />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Moda e beleza</p> */}
                    </div>
                </Link>
                <Link 
                to='/category/MUSICA' 
                className={`modal__category__item__side ${activeCategory === 'MUSICA' ? 'active' : ''}`} 
                
                >
                    <div>
                        <HiOutlineMusicNote />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Música</p> */}
                    </div>
                </Link>
                <Link 
                to='/category/VIAGEMETURISMO' 
                className={`modal__category__item__side ${activeCategory === 'VIAGEMETURISMO' ? 'active' : ''}`} 
                
                >
                    <div>
                        <SlPlane />
                        {/* <p className={`label__category__side ${isSideBarOpen ? 'open__side' : ''}`}>Viagem e turismo</p> */}
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Side_Bar