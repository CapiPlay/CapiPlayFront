import axios from "../AxiosConfig";

const videoApiUrl = "http://7000/api/video";

const VideoService = {
  /*TODO: RETIRAR**/
  criar: async (videoData) => {
    try {
      const response = await axios.post(`${videoApiUrl}/criar`, videoData);
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};

export default VideoService;
