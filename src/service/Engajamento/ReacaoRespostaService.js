import axios from "../AxiosConfig";

const ReacaoRespostaService = {
  /**
   *
   * @param {*} criarReacaoRespostaCommand ( String idUsuario, String idResposta, Boolean curtida)
   * @returns void
   */
  criar: async (criarReacaoRespostaCommand) => {
    try {
      const response = await axios.post(
        "/engajamento/reacaoResposta",
        criarReacaoRespostaCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarUmReacaoRespostaCommand ( String idUsuario, String idResposta)
   * @returns ReacaoResposta ( String idUsuario, String idResposta, Boolean curtida)
   */
  buscarUm: async (idResposta) => {
    try {
      const response = await axios.get(
        "/engajamento/reacaoResposta/" + idResposta
      );
      return response.data.curtida;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarTodosPorComentarioReacaoRespostaCommand (String idResposta)
   * @returns &lt;List&lt;&gtReacaoResposta;&gt; ( String idUsuario, String idResposta, Boolean curtida)
   */
  buscarTodosPorComentario: async (
    buscarTodosPorComentarioReacaoRespostaCommand
  ) => {
    try {
      const response = await axios.get(
        "/engajamento/reacaoResposta/buscar-todos-por-Resposta",
        buscarTodosPorComentarioReacaoRespostaCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default ReacaoRespostaService;
