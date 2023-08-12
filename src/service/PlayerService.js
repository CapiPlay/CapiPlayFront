import axios from "./AxiosConfig";

const PlayerService = {

    buscarVideoObject: async (videoId) => {
        try {
            const response = await axios.get("/video/buscar-completo/" + videoId);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    buscarVideo: async (caminho) => {
        try {
            const response = await axios.get("/video/static/" + caminho);
            console.log(response)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    buscarVideosResumidos: async (page) => {
        let size = 10
        try {
            const response = await axios.get("/video/buscar-resumido?page=" + page + "&size=" + size);
            console.log(response.data.content)
            return response.data.content;
        } catch (error) {
            console.error(error);
        }
    },

    buscarVideosHome: async (page) => {
        let randomPaginationPart = Math.floor(Math.random() * 2) + 1
        let randomPaginationComp = Math.floor(Math.random() * 2) + 1
        let size = 0
        if (randomPaginationPart === 1 || randomPaginationPart === 2) {
            size = 6
        } else if (randomPaginationComp === 2 || randomPaginationComp === 1) {
            size = 9
        }
        try {
            const response = await axios.get("/video/buscar-resumido?page=" + page + "&size=" + size);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default PlayerService; 