import '../shorts/Shorts.css'

//hooks
import { useEffect, useRef, useState } from 'react'

//componentes
import VideoService from '../../service/Video/VideoService'
import ShortsComponent from './shorts_component/ShortsComponent'

//icons
import { BsFillArrowUpSquareFill } from "react-icons/bs"
import { BsFillArrowDownSquareFill } from "react-icons/bs"

// shorts
import { useSelector, useDispatch } from "react-redux"
import { setListShorts } from '../../store/features/shorts/shortsSlice'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'

const Shorts = () => {

    const dispatch = useDispatch()    
    
    const scrollRef = useRef(null)
    const [isAnimate, setIsAnimate] = useState(false)

    const { id } = useParams()

    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [headerAppearing, setHeaderAppearing] = useState(window.innerWidth >= 768)
    const shorts = useSelector((state) => state.shorts.listShorts)
    const [currentShortIndex, setCurrentShortIndex] = useState(0)

    useEffect(() => {
        setHeaderAppearing(windowWidth >= 576)
    }, [windowWidth])

    const handleNextVideo = () => {
        setTimeout(() => {
            const newIndex = (currentShortIndex + 1) % shorts.length
            setCurrentShortIndex(newIndex)
            scrollToIndex(newIndex)
        }, 500)
    }

    const handlePreviousVideo = () => {
        setTimeout(() => {
            const newIndex = (currentShortIndex - 1) % shorts.length
            setCurrentShortIndex(newIndex)
            scrollToIndex(newIndex)
        }, 500)
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {

        const func = async () => {
            const newShorts = []

            const firstShort = await VideoService.buscarCompleto(id)
            newShorts.push(firstShort?.data)

            for (let i = 0; i < 3; i++) {
                const short = await VideoService.buscarShorts()
                newShorts.push(short.data)
            }

            dispatch(setListShorts(newShorts))
        }

        func()

    }, [])

    // useEffect(() => {
    //     scrollToIndex(currentShortIndex)
    // }, [currentShortIndex])

    const scrollToIndex = (index) => {
        const scrollContainer = scrollRef.current
        if (scrollContainer) {
            const slideHeight = scrollContainer.scrollHeight / shorts.length
            scrollContainer.scrollTop = index * slideHeight
            setIsAnimate(true)
        }
    }

    return (
        <div
            className='container__all__shorts'
            style={{
                minHeight: `${windowHeight}px`
            }}>
            {
                headerAppearing && <Header />
            }
            <div className={`container__shorts ${isAnimate ? "animate" : ""}`} ref={scrollRef} >
                {
                    shorts &&
                    shorts.map((short, i) => <ShortsComponent key={i} short={short} />)
                }
            </div>
            {
                headerAppearing && (
                    <div className='container__button__pass__shorts'>
                        <button
                            id='voltar'
                            aria-label='Botão Voltar'
                            onClick={handlePreviousVideo}
                        >
                            <BsFillArrowUpSquareFill />
                        </button>
                        <button
                            id='proximo'
                            aria-label='Botão Próximo'
                            onClick={handleNextVideo}
                        >
                            <BsFillArrowDownSquareFill />
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Shorts