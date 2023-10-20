import axios from "../AxiosConfig";

const ReacaoService = {
  /**
   *
   * @param {*} criarReacaoCommand ( String idUsuario, String idVideo, Boolean curtida)
   * @returns void
   */
  criar: async (criarReacaoCommand) => {
    try {
      const response = await axios.post(
        "/engajamento/reacao",
        criarReacaoCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarUmReacaoCommand ( String idUsuario, String idVideo)
   * @returns Reacao ( String idUsuario, String idVideo, Boolean curtida)
   */
  buscarUm: async (idVideo) => {
    try {
      const response = await axios.get(
        "/engajamento/reacao/" + idVideo
      );
      return response.data.curtida;
    } catch (err) {
      return
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
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default ReacaoService;
