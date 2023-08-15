import React, { useState, useRef, useEffect } from 'react'
import './Video_player_contructor.css'
import {BsFillPauseFill, BsPlayFill} from 'react-icons/bs'
import {BsFillVolumeUpFill, BsFillVolumeOffFill, BsFillVolumeMuteFill, BsFillVolumeDownFill} from 'react-icons/bs'
import {LuMaximize2} from 'react-icons/lu'

function usePlayerState($videoPlayer){
    const [playerState, setPlayerState] = useState({
        playing: false,
        percentage: 0,
    })

    useEffect(() => {
        playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause()
    }, [
        $videoPlayer,
        playerState.playing,
    ])

    function toggleVideoPlay() {
        setPlayerState(prevState => ({
            ...prevState,
            playing: !prevState.playing,
        }));
    }

    function handleTimeUpdate(){
        const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100
        console.log(currentPercentage)
        setPlayerState(prevState => ({
            ...prevState,
            percentage: currentPercentage,
        }));
    }

    function handleChangeVideoPercentage(event){
        const currentPercentageValue = event.target.value
        $videoPlayer.current.currentTime = ($videoPlayer.current.duration / 100) * currentPercentageValue

        setPlayerState(prevState => ({
            ...prevState,
            percentage: currentPercentageValue,
        }));
    }

    return {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage
    }
}

function Video_player_contructor({video}) {
    const [status, setStatus] = useState();
    const [statusVolume, setStatusVolume] = useState();

    const enter = () => {
        setStatus(true)
    }

    const leave = () => {
        setStatus(false)
    }

    const enterVolume = () => {
        setStatusVolume(true)
    }

    const leaveVolume = () => {
        setStatusVolume(false)
    }

    const $videoPlayer = useRef(null)

    const {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage
    } = usePlayerState($videoPlayer)

    const fullScreen = () => {
        var element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

  return (
    <div className='videoWrapper' onMouseEnter={() => enter()}
            onMouseLeave={() => leave()}>
        {status && 
        <div className='video__player__contructor__title'>
            <h2>{video.titulo}</h2>
        </div>
        }
        {status && 
        <div className='video__volume__controller' onMouseEnter={() => enterVolume()} onMouseLeave={() => leaveVolume()}>
            { statusVolume &&
                <input type='range'/>
            }
            <BsFillVolumeUpFill size={'1.5rem'} color='black' />
        </div>
        }
        <video 
            ref={$videoPlayer}
            src={"http://localhost:7000/api/video/static/" + video.caminhos[5]} 
            type="video/mp4" 
            onTimeUpdate={handleTimeUpdate}
            className='video__player'
            poster={"http://localhost:7000/api/video/static/" + video.caminhos[3]}  
            key={video.uuid}
        />
        {status && 
        <div className='controls'>
            <div className='pause'>
            <button onClick={toggleVideoPlay} >
                { playerState.playing ? <BsFillPauseFill size={"2rem"}/>:<BsPlayFill size={"2rem"}/>}
            </button>
            </div>
            <div className='barra__progressao'>
            <input
                type='range'
                min={0}
                max={100}
                onChange={handleChangeVideoPercentage}
                value={playerState.percentage}

            />
            </div>
            <div className='maximise'>
                <button onClick={() => fullScreen()}>
                    <LuMaximize2 size={"1.5rem"}/>
                </button>
            </div>
        </div>
    }
    </div>
  )
}

export default Video_player_contructor