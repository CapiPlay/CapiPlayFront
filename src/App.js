import './App.css';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Player from './pages/player/Player'
import Historic from './pages/historic/Historic'
import Shorts from './pages/shorts/Shorts'
import VideoDetails from './pages/videoDetails/VideoDetails'
import VideoUpload from './pages/videoUpload/VideoUpload'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Settings  from './pages/settings/Settings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player" element={<Player />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/video-details" element={<VideoDetails />} />
          <Route path="/video-upload" element={<VideoUpload />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
