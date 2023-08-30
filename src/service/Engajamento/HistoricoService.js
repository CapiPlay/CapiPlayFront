import axios from "../AxiosConfig";

const HistoricoService = {
  /**
   *
   * @param {*} idUsuario String
   * @param {*} criarHistoricoCommand (String idUsuario, String idVideo, Float percentagemSomada)
   * @returns void
   */
  criar: async (idUsuario, criarHistoricoCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.post(
        "/engajamento/historico",
        criarHistoricoCommand,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} idUsuario String
   * @param {*} buscarUmHistoricoCommand (String idUsuario, String idVideo)
   * @returns Historico  (Usuario idUsuario, Video idVideo, ZonedDateTime dataHora, Integer qtdVisualizadas,float percentagemSomada)
   */
  buscarUm: async (idUsuario, buscarUmHistoricoCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.get(
        "/engajamento/historico",
        buscarUmHistoricoCommand,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} idUsuario String
   * @param {*} buscarTodosPorDataHistoricoCommand (String idUsuario,LocalDate dataHora)
   * @returns List&lt;Usuario&gt; (Usuario idUsuario, Video idVideo, ZonedDateTime dataHora, Integer qtdVisualizadas,float percentagemSomada)
   */
  buscarTodosPorData: async (idUsuario, buscarTodosPorDataHistoricoCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.get(
        "/engajamento/historico/buscar-todos-históricos-por-data",
        buscarTodosPorDataHistoricoCommand,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} idUsuario String
   * @returns List&lt;Usuario&gt; (Usuario idUsuario, Video idVideo, ZonedDateTime dataHora, Integer qtdVisualizadas,float percentagemSomada)
   */
  buscarTodosPorData: async (idUsuario) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.get(
        "/engajamento/historico/buscar-todos-históricos-por-usuario",
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};
