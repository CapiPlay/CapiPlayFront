import React, { useEffect, useState } from 'react'
import './Player.css'
import Desktop_player from './player_screen_methods/player_desktop/Desktop_player'
import Mobile_player from './player_screen_methods/player_mobile/Mobile_player'
import Tablet_player from './player_screen_methods/player_tablet/Tablet_player'
import { useParams } from 'react-router-dom';
import PlayerService from '../../service/PlayerService'

//item (video) que vai ser o objeto vindo do back_end que conterá todas as informações
function Player() {
    const [video, setVideo] = useState();
    const { videoId } = useParams();
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
      buscarVideo(videoId)  
      function handleResize() {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const buscarVideo = async (videoId) => {
      setVideo(await PlayerService.buscarVideoObject(videoId))
    }

  //são apenas variáveis de exemplo, elas vão vir com o objeto 
  const video_title_var = 'Pingu.'
  const video_views_var = '57k'
  const video_likes_var = '57k'
  
  const verifyDesktop = () => {
    if (screenSize.width < 900 && screenSize.width > 450) {
      return true
    } else {
      return false
    }
  }

    const verifyTablet = () => {
      if (screenSize.width < 900 && screenSize.width > 450) {
        return true
      } else {
        return false
      }
    }
    return (
      <>
        {video && Object.keys(video).length > 0 && ( // Check if video data is available
          <>
            {verifyTablet() ? (
              <div>
                <Tablet_player video={video} />
              </div>
            ) : (
              <div>
                {verifyDesktop() ? (
                  <div>
                    <Mobile_player video={video} />
                  </div>
                ) : (
                  <div>
                    <Desktop_player video={video} />
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </>
    );
  }
export default Player;
