import '../shorts/Shorts.css'

//hooks
import { useEffect, useRef, useState } from 'react'

//componentes
import Header from '../../components/header/Header'
import ShortsService from '../../service/ShortsService'
import ShortsComponent from './shorts_component/ShortsComponent'

//icons
import { BsArrowLeftShort, BsFillArrowUpSquareFill } from "react-icons/bs"
import { BsFillArrowDownSquareFill } from "react-icons/bs"

const Shorts = () => {

    //transição entre os vídeos
    const [transitioning, setTransitioning] = useState(false)

    const [isAnimating, setIsAnimating] = useState(false);

    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [headerAppearing, setHeaderAppearing] = useState(window.innerWidth >= 768)

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const [startY, setStartY] = useState(0)

    const [shorts, setShorts] = useState([])

    const [currentShortIndex, setCurrentShortIndex] = useState(0)



    //para retornar para o vídeo anterior (utilizando o botão)
    const handlePreviousVideo = () => {
        // if (!transitioning) {
        //     setTransitioning(true)
        //     setTimeout(() => {
        //         setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + shorts.length) % shorts.length)
        //         setTransitioning(false)
        //     }, 500)
        // }

        setCurrentShortIndex((prevIndex) => (prevIndex - 1 + shorts.length) % shorts.length);
    }

    ///para passar para e retornar vídeo (utilizando o scroll)
    const handleScrollUp = (event) => {
        if (event.deltaY < 0 && currentVideoIndex !== 0) {
            handlePreviousVideo()
        } else if (event.deltaY > 0 && currentVideoIndex !== shorts.length - 1) {
            handleNextVideo()
        }
    }

    const handleTouchStart = (event) => {
        setStartY(event.touches[0].clientY)
        setTransitioning(false)
    }

    const handleTouchMove = (event) => {
        const deltaY = event.touches[0].clientY - startY
        if (deltaY > -50 && currentVideoIndex !== 0) {
            handlePreviousVideo()
        } else if (deltaY < 50 && currentVideoIndex !== shorts.length - 1) {
            handleNextVideo()
        }
    }


    //responsividade automática da tela
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)


        const func = async () => {
            const data = await ShortsService.buscar()
            console.log(data)
            const newShorts = []

            newShorts.push(data.caminhos[5]) // voltar a ter apenas data
            newShorts.push("9dec9e17-6e80-483d-8a51-d6b32c8914d8/video_17998318922429127514.mp4")
            console.log(newShorts)

            setShorts((prevShorts) => [...prevShorts, ...newShorts])
        }

        func()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    //fazer o header aparecer ou não
    useEffect(() => {
        setHeaderAppearing(windowWidth >= 576)
    }, [windowWidth])


    //para passar para próximo vídeo (utilizando o botão)
    const handleNextVideo = () => {
        // if (!transitioning) {
        //     setTransitioning(true)
        //     setTimeout(() => {
        //         setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % shorts.length)
        //         setTransitioning(false)
        //     }, 500)
        // }

        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentShortIndex((prevIndex) => (prevIndex + 1) % shorts.length);
                setIsAnimating(false);
            }, 500);
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
            <div className={`container__shorts ${isAnimating ? 'transition-in' : ''}`}>
                {shorts.length > 0 && currentShortIndex > 0 && <ShortsComponent short={shorts[currentShortIndex - 1]} />}
                {shorts.length > 0 && <ShortsComponent short={shorts[currentShortIndex]} />}
                {shorts.length > 0 && <ShortsComponent short={shorts[currentShortIndex + 1]} />}
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