import axios from "./AxiosConfig";

const PlayerService = {

    buscarVideo: async (videoId) => {
        try {
            const response = await axios.get("/video/buscar-completo/"+ videoId);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    buscarVideosResumidos: async (page) => {
        let size = 10
        try {
            const response = await axios.get("/video/buscar-resumido?page="+page+"&size="+size);
            return response.data.content;
        } catch (error) {
            console.error(error);
        }
    }
}

export default PlayerService; 