import './App.css';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Player from './pages/player/Player'
import Shorts from './pages/shorts/Shorts'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import Historic from './pages/historic/Historic'
import Settings from './pages/settings/Settings'
import NotFound from './pages/notFound/NotFound'
import VideoUpload from './pages/videoUpload/VideoUpload'
import VideoDetails from './pages/videoDetails/VideoDetails'
import { Provider } from 'react-redux'
import store from './store'
import Video_player_contructor from './pages/player/video_player_contructor/Video_player_contructor'
import ResultSearch from './pages/resultSearch/ResultSearch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Upload from './pages/upload/Upload'
import UploadVideo from './pages/uploadVideo/UploadVideo'
import UploadShorts from './pages/uploadShorts/UploadShorts'
import TopLoadingBar from 'react-top-loading-bar'
import { useRef, useState } from 'react'
import axiosInstance from "./service/AxiosConfig"
import { useEffect } from 'react'
import UsuarioService from './service/Usuario/UsuarioService'
import Cookies from 'js-cookie'
import Category from './pages/category/Category';

function App() {

  const [isLightMode] = useState(localStorage.getItem('lightTheme') === 'true')
  const [loading, setLoading] = useState(false)
  const loadingBarRef = useRef(null)

  useEffect(() => {
    if (isLightMode == true) {
      document.body.classList.add("light__mode")
    } else {
      document.body.classList.remove("light__mode")
    }
  }, [isLightMode])

  const generateTokenAnonimous = async () => {
    const userToken = Cookies.get("token")
    const existAnonimoToken = Cookies.get("anonimo")
    if (userToken || existAnonimoToken) {
      return
    }
    const tokenAnonimo = await UsuarioService.getTokenAnonimo()
    Cookies.set("anonimo", tokenAnonimo)
  }

  useEffect(() => {
    generateTokenAnonimous()
    
    axiosInstance.interceptors.request.use(
    (config) => {
      setLoading(true)
      loadingBarRef.current.continuousStart()
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      setLoading(false)
      loadingBarRef.current.complete()
      return response
    },
    (error) => {
      setLoading(false)
      loadingBarRef.current.complete()
      return Promise.reject(error)
    }
  )
  }, [])

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
            <Route path='*' element={<NotFound />} />
            <Route path='/category/:category' element={<Category />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <TopLoadingBar ref={loadingBarRef} color="var(--lightpurple)" />
    </div>
  )
}

export default App