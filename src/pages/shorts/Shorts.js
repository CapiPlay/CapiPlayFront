import '../shorts/Shorts.css'

//hooks
import { useEffect, useRef, useState } from 'react'

//componentes
import Header from '../../components/header/Header'
import ShortsService from '../../service/ShortsService'
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
    console.log(id)

    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [headerAppearing, setHeaderAppearing] = useState(window.innerWidth >= 768)

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

    const shorts = useSelector((state) => state.shorts.listShorts)

    const [currentShortIndex, setCurrentShortIndex] = useState(0)

    //fazer o header aparecer ou não
    useEffect(() => {
        setHeaderAppearing(windowWidth >= 576)
    }, [windowWidth])

    //para passar para próximo vídeo (utilizando o botão)
    const handleNextVideo = () => {
        if (!isAnimating) {
            setTimeout(() => {
                const newIndex = (currentShortIndex + 1) % shorts.length
                setCurrentShortIndex(newIndex)
                scrollToIndex(newIndex)
            }, 500)
        }
    }

    //para retornar para o vídeo anterior (utilizando o botão)
    const handlePreviousVideo = () => {

        setCurrentShortIndex((prevIndex) => (prevIndex - 1 + shorts.length) % shorts.length)
        setIsClicking(true)
        setTimeout(() => {
            setIsClicking(false)
        }, 500)
    }

    //responsividade automática da tela
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    //animações para passar de shorts
    useEffect(() => {

        const handleScroll = () => {
            setIsScrolling(true)
        }

        const scrollContainer = scrollRef.current
        scrollContainer.addEventListener('scroll', handleScroll)

        const func = async () => {
            const newShorts = []
            const getFirstShort = async() => {
                const short = await ShortsService.buscarUUID(id)
                return short
            }
    
            newShorts.push(getFirstShort())
            // for(let i = 0; i < 5; i++) {
            //     const data = await ShortsService.buscar()
            //     newShorts.push(data)
            //     console.log(data)
            // }
            dispatch(setListShorts(null, newShorts, null))
        }
        
        console.log(shorts)
        func()

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