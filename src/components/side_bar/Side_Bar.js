import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { TbMovie, TbPlant, TbSchool, TbHanger2, TbChefHat, } from 'react-icons/tb'
import { MdOutlineScience, MdOutlineSportsVolleyball } from 'react-icons/md'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { HiOutlineMusicNote } from 'react-icons/hi'
import { PiTelevision } from 'react-icons/pi'
import { LuGamepad2 } from 'react-icons/lu'
import { SlPlane } from 'react-icons/sl'

import './Side_Bar.css'

const categories = [
    { name: 'ARTESECULTURA', label: 'Artes e cultura', icon: <IoColorPaletteOutline /> },
    { name: 'CIENCIAETECNOLOGIA', label: 'Ciências e Tecnologia', icon: <MdOutlineScience /> },
    { name: 'CULINARIA', label: 'Culinária', icon: <TbChefHat /> },
    { name: 'EDUCACAO', label: 'Educação', icon: <TbSchool /> },
    { name: 'ESPORTES', label: 'Esportes', icon: <MdOutlineSportsVolleyball /> },
    { name: 'ENTRETERIMENTO', label: 'Entretenimento', icon: <PiTelevision /> },
    { name: 'DOCUMENTARIO', label: 'Documentário', icon: <TbMovie /> },
    { name: 'JOGOS', label: 'Jogos', icon: <LuGamepad2 /> },
    { name: 'LIFESTYLE', label: 'Lifestyle', icon: <TbPlant /> },
    { name: 'MODAEBELEZA', label: 'Moda e beleza', icon: <TbHanger2 /> },
    { name: 'MUSICA', label: 'Música', icon: <HiOutlineMusicNote /> },
    { name: 'VIAGEMETURISMO', label: 'Viagem e turismo', icon: <SlPlane /> },
]

const Side_Bar = ({ isOpen}) => {

    const openSideBar = useSelector((state) => state.header.isClicked)
    const [activeCategory, setActiveCategory] = useState('')
    const [widthPage, setWidthPage] = useState(window.innerWidth)

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
    }

    useEffect(() => {
        setWidthPage(window.innerWidth)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.container__side__bar') && !e.target.closest('.header__menu__icon')) {
                isOpen(false)
            }
        }

        const handleResize = () => {
            isOpen(false)
        }

        document.addEventListener('click', handleClickOutside)
        window.addEventListener('resize', handleResize)

        return () => {
            document.removeEventListener('click', handleClickOutside)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            className={`container__side__bar ${openSideBar ? 'side__bar__open' : ''}`}
            style={widthPage <= 900 && openSideBar !== true ? { display: 'none', height: '100%' } : {}}
        >
            <div className={`category__box ${openSideBar ? 'internal__side__bar__open' : ''}`}>
                {
                    categories.map((category) => (
                        <Link
                            to={`/category/${category.name}`}
                            key={category.name}
                            className={`modal__category__item__side 
                            ${activeCategory === category.name ? 'active__category' : ''} 
                            ${openSideBar ? 'item__side__bar__open' : ''}`}
                            onClick={() => handleCategoryClick(category.name)
                            }
                        >
                            <div>
                                <div className={openSideBar ? 'open__item__container' : ''}>{category.icon}</div>
                                {openSideBar && (
                                    <div className="name__category__side__bar">
                                        <p className="label__category__side">{category.label}</p>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default Side_Bar
