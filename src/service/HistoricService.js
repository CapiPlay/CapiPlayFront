import axios from "./AxiosConfig";

const HistoricService = {

    criar: async (criarHistoricoCommand) => {
        try {
            const response = await axios.get("/engajamento/historico", criarHistoricoCommand);
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    buscarUm: async (buscarUmHistoricoCommand) => {
        try {
            const response = await axios.get("/engajamento/historico", buscarUmHistoricoCommand);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}

export default HistoricService; 