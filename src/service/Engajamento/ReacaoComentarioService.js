import axios from "../AxiosConfig";

const ReacaoComentarioService = {
  /**
   *
   * @param {*} criarReacaoComentarioCommand ( String idUsuario, String idComentario, Boolean curtida)
   * @returns void
   */
  criar: async (criarReacaoComentarioCommand) => {
    try {
      const response = await axios.post(
        "/engajamento/reacaoComentario",
        criarReacaoComentarioCommand
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarUmReacaoComentarioCommand ( String idUsuario, String idComentario)
   * @returns ReacaoComentario ( String idUsuario, String idComentario, Boolean curtida)
   */
  buscarUm: async (idComentario) => {
    try {
      const response = await axios.get(
        "/engajamento/reacaoComentario/" + idComentario
      );
      return response.data.curtida;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarTodosPorComentarioReacaoComentarioCommand (String idComentario)
   * @returns &lt;List&lt;&gtReacaoComentario;&gt; ( String idUsuario, String idComentario, Boolean curtida)
   */
  buscarTodosPorComentario: async (
    buscarTodosPorComentarioReacaoComentarioCommand
  ) => {
    try {
      const response = await axios.get(
        "/engajamento/reacaoComentario/buscar-todos-por-comentario",
        buscarTodosPorComentarioReacaoComentarioCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default ReacaoComentarioService;
