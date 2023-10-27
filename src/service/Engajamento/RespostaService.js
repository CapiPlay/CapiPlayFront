import axios from "../AxiosConfig";

const RespostaService = {
  /**
   *
   * @param {*} criarRespostaCommand ( String idUsuario, String idComentario, String texto)
   * @returns Resposta (String idResposta, String texto, ZonedDateTime dataHora, Usuario idUsuario, Comentario idComentario)
   */
  criar: async (criarRespostaCommand) => {
    console.log(criarRespostaCommand)
    try {
      const response = await axios.post(
        "/engajamento/resposta",
        criarRespostaCommand
      );
      return response.data;
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
  buscarUm: async (idResposta) => {
    try {
      const response = await axios.get(
        "/engajamento/resposta/" +idResposta
      );
      return response.data;
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
    idComentario,
    page
  ) => {
    try {
      const response = await axios.get(
        "/engajamento/resposta/buscar-todos-por-comentario/" + page + "/" + idComentario
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  /**
   *
   * @param {*} deletarRespostaCommand (String idUsuario, String idResposta)
   * @returns void
   */
  deletar: async (deletarRespostaCommand) => {
    try {
      const response = await axios.get(
        "/engajamento/resposta",
        deletarRespostaCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default RespostaService;
