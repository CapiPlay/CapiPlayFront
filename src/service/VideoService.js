import axios from "./AxiosConfig"


const VideoService = {
  criar: async (video) => {
    try {
      const response = await axios.post(
        "/api/video/criar",
        video,
        {
        headers: {
          'Content-Type': 'multipart/form-data'
        }}
      );
      console.log(response.data);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};

export default VideoService;
