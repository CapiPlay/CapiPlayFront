import axios from "../AxiosConfig";

const ComentarioService = {
  /**
   *
   * @param {*} idUsuario String
   * @param {*} criarComentarioCommand (String idVideo, String texto)
   * @returns Comentario
   */
  criar: async (idUsuario, criarComentarioCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.post(
        "/engajamento/comentario",
        criarComentarioCommand,
        {
          header,
        }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarUmComentarioCommand (String idComentario)
   * @returns Comentario
   */
  buscarUm: async (buscarUmComentarioCommand) => {
    try {
      const response = await axios.get(
        "/engajamento/comentario",
        buscarUmComentarioCommand
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} page int
   * @param {*} buscarUmComentarioCommand (String idComentario)
   * @returns Page&lt;Comentario&gt;
   */
  buscarTodosPorVideo: async (buscarTodosPorVideoComentarioCommand, page) => {
    try {
      const response = await axios.get(
        "/engajamento/comentario/buscar-todos-por-video/" + page,
        buscarTodosPorVideoComentarioCommand
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} page int
   * @param {*} buscarTodosPorDataComentarioCommand (String idVideo, LocalDate data)
   * @returns Page&lt;Comentario&gt;
   */
  buscarTodosPorData: async (buscarTodosPorDataComentarioCommand, page) => {
    try {
      const response = await axios.get(
        "/engajamento/comentario/buscar-todos-por-data/" + page,
        buscarTodosPorDataComentarioCommand
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} page int
   * @param {*} buscarTodosPorDataComentarioCommand (String idVideo, LocalDate data)
   * @returns Page&lt;Integer&gt;
   */
  buscarQuantidadeRespostas: async (
    buscarQuantidadeRepostasComentarioCommand
  ) => {
    try {
      const response = await axios.get(
        "/engajamento/comentario/buscar-quantidade-respostas",
        buscarQuantidadeRepostasComentarioCommand
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} idUsuario String
   * @param {*} deletarComentarioCommand (String idComentario, String idUsuario;)
   * @returns void
   */
  deletar: async (idUsuario, deletarComentarioCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.delete(
        "/engajamento/comentario/",
        deletarComentarioCommand,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};

export default ComentarioService;