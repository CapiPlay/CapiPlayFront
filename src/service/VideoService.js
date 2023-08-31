import axios from "./AxiosConfig"


const VideoService = {
  criar: async (video, usuarioId) => {
    try {
      const header = {
        usuarioId: usuarioId,
      };
      const response = await axios.post(
        "/api/video/criar",
        video,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};

export default VideoService;
