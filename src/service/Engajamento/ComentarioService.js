import axios from "../AxiosConfig";

const ComentarioService = {
  /**
   *
   * @param {*} criarComentarioCommand (String idVideo, String texto)
   * @returns Comentario
   */
  criar: async (criarComentarioCommand) => {
    try {
      const response = await axios.post(
        "/engajamento/comentario",
        criarComentarioCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarUmComentarioCommand (String idComentario)
   * @returns Comentario
   */
  buscarUm: async (idComentario) => {
    try {
      const response = await axios.get(
        "/engajamento/comentario/"+idComentario
      );
      return response.data;
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
  buscarTodosPorVideo: async (idVideo, page) => {
    try {
      const response = await axios.get(
        "/engajamento/comentario/buscar-todos-por-video/" + page + "/" + idVideo
      );
      return response.data;
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
      return response.data;
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
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} deletarComentarioCommand (String idComentario, String idUsuario;)
   * @returns void
   */
  deletar: async (deletarComentarioCommand) => {
    try {
      const response = await axios.delete(
        "/engajamento/comentario/",
        deletarComentarioCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default ComentarioService;