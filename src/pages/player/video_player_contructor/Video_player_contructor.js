import React, { useState, useRef, useEffect } from 'react'
import './Video_player_contructor.css'
import pingu from '../../../assets/image/pingu.mp4'
import thumbnail from '../../../assets/image/img_video.png'
import {BsFillPauseFill, BsPlayFill} from 'react-icons/bs'

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
        setPlayerState({
            playerState,
            playing: !playerState.playing,
        })
    }

    function handleTimeUpdate(){
        const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100
        console.log(currentPercentage)
        setPlayerState({
            playerState,
            percentage: currentPercentage,
        })
    }

    // function handleChangeVideoPercentage(event){
    //     const currentPercentageValue = event.target.value
    //     $videoPlayer.current.currentTime = ($videoPlayer.current.duration / 100) * currentPercentageValue

    //     setPlayerState({
    //         playerState,
    //         percentage: currentPercentageValue,
    //     })
    // }

    return {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        // handleChangeVideoPercentage
    }
}

function Video_player_contructor() {

    const $videoPlayer = useRef(null)

    const {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        // handleChangeVideoPercentage
    } = usePlayerState($videoPlayer)

  return (
    <div className='videoWrapper'>
    <video 
        ref={$videoPlayer}
        src={pingu}
        poster={thumbnail}
        onTimeUpdate={handleTimeUpdate}
    />
    <div className='controls'>
        <button onClick={toggleVideoPlay}>
            { playerState.playing ? <BsFillPauseFill/>:<BsPlayFill/>}
        </button>
        <input
            type='range'
            min={0}
            max={100}
            // onChange={handleChangeVideoPercentage}
            value={playerState.percentage}
        />
    </div>
    </div>
  )
}

export default Video_player_contructor