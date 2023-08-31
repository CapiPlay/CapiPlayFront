import axios from "../AxiosConfig";

const ReacaoService = {
  /**
   *
   * @param {*} idUsuario String
   * @param {*} criarReacaoCommand ( String idUsuario, String idVideo, Boolean curtida)
   * @returns void
   */
  criar: async (idUsuario, criarReacaoCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.post(
        "/engajamento/reacao",
        criarReacaoCommand,
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
   * @param {*} buscarUmReacaoCommand ( String idUsuario, String idVideo)
   * @returns Reacao ( String idUsuario, String idVideo, Boolean curtida)
   */
  buscarUm: async (idUsuario, buscarUmReacaoCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.get(
        "/engajamento/reacao",
        buscarUmReacaoCommand,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarTodosPorComentarioReacaoCommand (String idVideo)
   * @returns &lt;List&lt;&gtReacao;&gt; ( String idUsuario, String idVideo, Boolean curtida)
   */
  buscarTodosPorVideo: async (buscarTodosPorComentarioReacaoCommand) => {
    try {
      const response = await axios.get(
        "/engajamento/reacao/buscar-todos-por-video",
        buscarTodosPorComentarioReacaoCommand
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};

export default ReacaoService;
