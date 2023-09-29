import '../shorts/Shorts.css'

// hooks
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { setListShorts, getIdUserPost } from '../../store/features/shorts/shortsSlice'

// componentes
import ShortsComponent from './shorts_component/ShortsComponent'
import Header from '../../components/header/Header'

// icons
import { BsFillArrowUpSquareFill } from "react-icons/bs"
import { BsFillArrowDownSquareFill } from "react-icons/bs"

// service
import VideoService from '../../service/Video/VideoService'

const Shorts = () => {

    const dispatch = useDispatch()
    const shorts = useSelector((state) => state.shorts.listShorts)

    const scrollRef = useRef(null)
    const { id } = useParams()

    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [headerAppearing, setHeaderAppearing] = useState(window.innerWidth >= 768)

    useEffect(() => {
        setHeaderAppearing(windowWidth >= 576)
    }, [windowWidth])

    const handleNextVideo = () => {
        const scrollStep = window.innerHeight / 2
        scrollTo(scrollStep)
    }

    const handlePreviousVideo = () => {
        const scrollStep = -window.innerHeight / 2
        scrollTo(scrollStep)
    }

    const scrollTo = (scrollStep) => {
        setTimeout(() => {
            const containerShorts = scrollRef.current

            if (containerShorts) {
                containerShorts.scrollBy({
                    top: scrollStep,
                    behavior: 'smooth',
                })
            }
        }, 200)
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
        const addShortsToList = async () => {
            const newShorts = []

            const firstShort = await VideoService.buscarCompleto(id)
            dispatch(getIdUserPost(firstShort.usuario.uuid))

            newShorts.push(firstShort)

            const promise = Array.from({ length: 3 }, () => VideoService.buscarShorts())
            const otherShorts = await Promise.all(promise)
            newShorts.push(...otherShorts)

            dispatch(setListShorts(newShorts))
        }

        addShortsToList()
    }, [])


    return (
        <div
            className='container__all__shorts'
            style={{
                minHeight: `${windowHeight}px`
            }}>
            {
                headerAppearing && <Header />
            }
            <div className="container__shorts" ref={scrollRef} >
                {
                    shorts &&
                    shorts.map((short, i) => <ShortsComponent key={i} short={short} position={i} />)
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