import axios from "./AxiosConfig";

const EngajamentoService = {

    criar: async (reaction) => {
        try {
            const response = await axios.get("/engajamento/reacao", reaction)
            return response
        } catch (err) {
            console.error(err)
        }
    },

    buscarReacao: async (reaction_ids) => {
        try {
            const response = await axios.get("/engajamento/reacao", reaction_ids);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    buscarTodasReacoesPorVideo: async (videoId) => {
        try {
            const response = await axios.get("/engajamento/reacao/buscar-todos-por-video", videoId);
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    buscarUm: async (idUsuario) => {
        try {
            const response = await axios.get("/api/engajamento/usuario/" + idUsuario);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

}

export default EngajamentoService;