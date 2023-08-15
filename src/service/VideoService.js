import axios from "./AxiosConfig"

const videoApiUrl = 'http://7000/api/video';

const VideoService = {
    criar: async (videoData) => {
        try {
            const response = await axios.post(`${videoApiUrl}/criar`, videoData);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    editar: async (videoId, videoData) => {
        try {
            const response = await axios.put(`${videoApiUrl}/${videoId}`, videoData);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    listar: async () => {
        try {
            const response = await axios.get(videoApiUrl);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
};

export default VideoService;