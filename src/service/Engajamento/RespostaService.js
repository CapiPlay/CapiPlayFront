import axios from "../AxiosConfig";

const RespostaService = {
  /**
   *
   * @param {*} criarRespostaCommand ( String idUsuario, String idComentario, String texto)
   * @param {*} idUsuario String
   * @returns Resposta (String idResposta, String texto, ZonedDateTime dataHora, Usuario idUsuario, Comentario idComentario)
   */
  criar: async (idUsuario, criarRespostaCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.post(
        "/engajamento/resposta",
        criarRespostaCommand,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarUmaRespostaCommand (String idResposta)
   * @returns Resposta (String idResposta, String texto, ZonedDateTime dataHora, Usuario idUsuario, Comentario idComentario)
}
   */
  buscarUm: async (buscarUmaRespostaCommand) => {
    try {
      const response = await axios.get(
        "/engajamento/resposta",
        buscarUmaRespostaCommand
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} page int
   * @param {*} buscarTodosPorComentarioRespostaCommand (String idResposta)
   * @returns &lt;Page&lt;Resposta&gt;&gt; (String idResposta, String texto, ZonedDateTime dataHora, Usuario idUsuario, Comentario idComentario)
   */
  buscarTodosPorComentario: async (
    buscarTodosPorComentarioRespostaCommand,
    page
  ) => {
    try {
      const response = await axios.get(
        "/engajamento/resposta/buscar-todos-por-comentario/" + page,
        buscarTodosPorComentarioRespostaCommand
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} deletarRespostaCommand (String idUsuario, String idResposta)
   * @param {*} idUsuario String
   * @returns void
   */
  deletar: async (deletarRespostaCommand, idUsuario) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.get(
        "/engajamento/resposta",
        deletarRespostaCommand,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};

export default RespostaService;
