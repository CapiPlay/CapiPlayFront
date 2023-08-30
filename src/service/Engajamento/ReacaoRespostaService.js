import axios from "../AxiosConfig";

const ReacaoRespostaService = {
  /**
   *
   * @param {*} idUsuario String
   * @param {*} criarReacaoRespostaCommand ( String idUsuario, String idResposta, Boolean curtida)
   * @returns void
   */
  criar: async (idUsuario, criarReacaoRespostaCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.post(
        "/engajamento/reacaoResposta",
        criarReacaoRespostaCommand,
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
   * @param {*} buscarUmReacaoRespostaCommand ( String idUsuario, String idResposta)
   * @returns ReacaoResposta ( String idUsuario, String idResposta, Boolean curtida)
   */
  buscarUm: async (idUsuario, buscarUmReacaoRespostaCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.get(
        "/engajamento/reacaoResposta",
        buscarUmReacaoRespostaCommand,
        { header }
      );
      return response;
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
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};
