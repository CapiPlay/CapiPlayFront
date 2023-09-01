import axios from "./AxiosConfig";

const PlayerService = {

    buscarVideoObject: async (videoId) => {
        try {
            const response = await axios.get("/api/video/buscar-completo/" + videoId);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    buscarVideo: async (caminho) => {
        try {
            const response = await axios.get("/api/video/static/" + caminho);
            console.log(response)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    buscarVideosResumidos: async (page) => {
        let size = 10
        try {
            const response = await axios.get("/api/video/buscar-resumido/?page=" + page + "&size=" + size + "&shorts=false");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }, 

    buscarVideosHomeShorts: async (page) => {
        const size = 6;
        try {
            const response = await axios.get("/api/video/buscar-resumido?page=" + page + "&size=" + size  + "&shorts=true");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }, 

    buscarVideosHomeReu: async (page) => {
        const size = 6;
        try {
            const response = await axios.get("/api/video/buscar-resumido?page=" + page + "&size=" + size + "&shorts=false");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }, 

    buscarVideosHomeRet: async (page) => {
        const randomPageSize = [1, 2][Math.floor(Math.random() * 2)];
        try {
            const response = await axios.get("/api/video/buscar-resumido?page=" + page + "&size=" +randomPageSize + "&shorts=false");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    buscarVideosHomeRev: async (page) => {
        const randomPageSize = 15;
        try {
            const response = await axios.get("/api/video/buscar-resumido?page=" + page + "&size=" +randomPageSize + "&shorts=false");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    buscarVideosHomeRec: async (page) => {
        const size = 15;
        try {
            const response = await axios.get("/api/video/buscar-resumido?page=" + page + "&size=" + size + "&shorts=false");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }


    
}

export default PlayerService; 