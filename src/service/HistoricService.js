import axios from "axios";

const HistoricService = {

    criar: async (criarHistoricoCommand) => {
        try {
            const response = await axios.get("http://localhost:8081/api/engajamento/historico", criarHistoricoCommand);
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    buscarUm: async (buscarUmHistoricoCommand) => {
        try {
            const response = await axios.get("http://localhost:8081/api/engajamento/historico", buscarUmHistoricoCommand);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}

export default HistoricService; 