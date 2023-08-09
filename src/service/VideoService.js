import axios from "./AxiosConfig"

const videoApiUrl = 'http://7000/api/video';

const VideoService = {
    criar: async (credentialUser) => {
        try {
            const response = await axios.post(videoApiUrl, credentialUser);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    // editar: async (userId, userData) => {
    //     try {
    //         const response = await axios.put(`${videoApiUrl}/${userId}`, userData);
    //         return response.data;
    //     } catch (err) {
    //         console.error(err);
    //         throw err;
    //     }
    // },
    // listar: async () => {
    //     try {
    //         const response = await axios.get(videoApiUrl);
    //         return response.data;
    //     } catch (err) {
    //         console.error(err);
    //         throw err;
    //     }
    // }
};

export default VideoService;