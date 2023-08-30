import axios from "../AxiosConfig";

const ReacaoComentarioService = {
  /**
   *
   * @param {*} idUsuario String
   * @param {*} criarReacaoComentarioCommand ( String idUsuario, String idComentario, Boolean curtida)
   * @returns void
   */
  criar: async (idUsuario, criarReacaoComentarioCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.post(
        "/engajamento/reacaoComentario",
        criarReacaoComentarioCommand,
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
   * @param {*} buscarUmReacaoComentarioCommand ( String idUsuario, String idComentario)
   * @returns ReacaoComentario ( String idUsuario, String idComentario, Boolean curtida)
   */
  buscarUm: async (idUsuario, buscarUmReacaoComentarioCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.get(
        "/engajamento/reacaoComentario",
        buscarUmReacaoComentarioCommand,
        { header }
      );
      return response;
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
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};
