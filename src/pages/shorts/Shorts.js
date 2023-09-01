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

const Shorts = () => {

    const [isAnimating, setIsAnimating] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    const dispatch = useDispatch()
    const scrollRef = useRef(null)

    const { id } = useParams()

    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [headerAppearing, setHeaderAppearing] = useState(window.innerWidth >= 768)
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const shorts = useSelector((state) => state.shorts.listShorts)
    const [currentShortIndex, setCurrentShortIndex] = useState(0)

    useEffect(() => {
        setHeaderAppearing(windowWidth >= 576)
    }, [windowWidth])

    const handleNextVideo = () => {
        if (!isAnimating) {
            setTimeout(() => {
                const newIndex = (currentShortIndex + 1) % shorts.length
                setCurrentShortIndex(newIndex)
                scrollToIndex(newIndex)
            }, 500)
        }
    }

    const handlePreviousVideo = () => {

        setCurrentShortIndex((prevIndex) => (prevIndex - 1 + shorts.length) % shorts.length)
        setIsClicking(true)
        setTimeout(() => {
            setIsClicking(false)
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

        const handleScroll = () => {
            setIsScrolling(true)
        }

        const scrollContainer = scrollRef.current
        scrollContainer.addEventListener('scroll', handleScroll)

        const func = async () => {
            const newShorts = []

            const firstShort = await VideoService.buscarCompleto(id)
            newShorts.push(firstShort.data)

            const segundo = await VideoService.buscarShorts()
            const terceiro = await VideoService.buscarShorts()

            newShorts.push(segundo)
            newShorts.push(terceiro)

            console.log(newShorts)

            dispatch(setListShorts(null, newShorts, null))
        }

        func()

        console.log(shorts)

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        scrollToIndex(currentShortIndex)
    }, [currentShortIndex])

    const scrollToIndex = (index) => {
        const scrollContainer = scrollRef.current
        if (scrollContainer) {
            const slideHeight = scrollContainer.scrollHeight / shorts.length
            scrollContainer.scrollTop = index * slideHeight
        }
    }

    return (
        <div
            className='container__all__shorts'
            style={{
                minHeight: `${windowHeight}px`
            }}>
            {
                // headerAppearing && <Header />
            }
            <div className={"container__shorts"} ref={scrollRef} >
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
                            style={currentVideoIndex === 0 ? { pointerEvents: 'none' } : {}}
                        >
                            <BsFillArrowUpSquareFill />
                        </button>
                        <button
                            id='proximo'
                            aria-label='Botão Próximo'
                            onClick={handleNextVideo}
                        // style={currentVideoIndex === videos.length - 1 ? { pointerEvents: 'none' } : {}}
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