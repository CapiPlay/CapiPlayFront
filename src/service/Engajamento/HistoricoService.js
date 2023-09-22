import axios from "../AxiosConfig";

const HistoricoService = {
  /**
   *
   * @param {*} criarHistoricoCommand (String idUsuario, String idVideo, Float percentagemSomada)
   * @returns void
   */
  criar: async (criarHistoricoCommand) => {
    try {
      const response = await axios.post(
        "/engajamento/historico",
        criarHistoricoCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarUmHistoricoCommand (String idUsuario, String idVideo)
   * @returns Historico  (Usuario idUsuario, Video idVideo, ZonedDateTime dataHora, Integer qtdVisualizadas,float percentagemSomada)
   */
  buscarUm: async (buscarUmHistoricoCommand) => {
    try {
      const response = await axios.get(
        "/engajamento/historico",
        buscarUmHistoricoCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarTodosPorDataHistoricoCommand (String idUsuario,LocalDate dataHora)
   * @returns List&lt;Usuario&gt; (Usuario idUsuario, Video idVideo, ZonedDateTime dataHora, Integer qtdVisualizadas,float percentagemSomada)
   */
  buscarTodosPorData: async (buscarTodosPorDataHistoricoCommand) => {
    try {
      const response = await axios.get(
        "/engajamento/historico/buscar-todos-históricos-por-data",
        buscarTodosPorDataHistoricoCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @returns List&lt;Usuario&gt; (Usuario idUsuario, Video idVideo, ZonedDateTime dataHora, Integer qtdVisualizadas,float percentagemSomada)
   */
  buscarTodosPorUsuario: async () => {
    try {
      const response = await axios.get(
          "/engajamento/historico/buscar-todos-historicos-por-usuario"
      );  
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default HistoricoService;
