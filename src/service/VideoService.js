import axios from "./AxiosConfig"


const VideoService = {
  criar: async (formData, usuarioId) => {
    return await axios.post('/api/video/criar', formData, {
      headers: {
        'usuarioId': usuarioId,
      },
    });
  },
};

export default VideoService;
