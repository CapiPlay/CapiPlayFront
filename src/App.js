import './App.css'

import { Provider } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import store from './store'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Player from './pages/player/Player'
import Shorts from './pages/shorts/Shorts'
import Search from './pages/search/Search'
import Upload from './pages/upload/Upload';
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import Historic from './pages/historic/Historic'
import Settings from './pages/settings/Settings'
import NotFound from './pages/notFound/NotFound'
import VideoUpload from './pages/videoUpload/VideoUpload'
import VideoDetails from './pages/videoDetails/VideoDetails'
import ResultSearch from './pages/resultSearch/ResultSearch'
import UploadVideo from './pages/uploadVideo/UploadVideo'
import UploadShorts from './pages/uploadShorts/UploadShorts'
import Video_player_contructor from './pages/player/video_player_contructor/Video_player_contructor'

function App() {

  const [isLightMode] = useState(localStorage.getItem('lightTheme') === 'true');

  useEffect(() => {
    if (isLightMode == true) {
      document.body.classList.add("light__mode");
    } else {
      document.body.classList.remove("light__mode");
    }
  });

  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/video/:videoId" element={<Player />} />
            <Route path="/historic" element={<Historic />} />
            <Route path="/shorts/:id" element={<Shorts />} />
            <Route path="/video-details" element={<VideoDetails />} />
            <Route path="/video-upload" element={<VideoUpload />} />
            <Route path="/profile/:usuarioId" element={<Profile />} />
            <Route path="/result-search" element={<ResultSearch />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/upload-video" element={<UploadVideo />} />
            <Route path="/upload-shorts" element={<UploadShorts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/teste" element={<Video_player_contructor />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;