import axios from "../AxiosConfig";


const VideoService = {
  /**
   *
   * @param {*} idUsuario String
   * @param {*} video ( String titulo,String descricao,List<String> tags,String categoria,
   * Boolean shorts, MultipartFile video,MultipartFile miniatura,Boolean restrito,String usuarioId))
   * @returns void
   */
  criar: async (video, usuarioId) => {
    try {
      const header = {
        usuarioId: usuarioId,
      };
      const response = await axios.post(
        "/api/video/criar",
        video,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  /**
   *
   * @param {*} usuarioId String
   * @param {*} uuid String
   * @returns VideoProjection (String getUuid(),String getTitulo(), String getDescricao(), String getCaminho(), 
   * List<String> getCaminhos(),List<Tag> getTags(), Long getQtdComentarios(), String getCategoria(),
   * Long getVisualizacoes(), Long getCurtidas();)
   */
  buscarUm: async (usuarioId, uuid) => {
    try {
      const header = {
        usuarioId: usuarioId,
      };
      const response = await axios.get(
       `/api/video/buscar-completo/${uuid}`,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  /**
   *
   * @param {*} usuarioId String
   * @param {*} size Int
   * @param {*} page Int
   * @returns &lt;List&lt;&VideoMiniaturaProjection;&gt; (String getUuid(),String getTitulo(),Boolean getShorts(),
   * Long getDuracao(), LocalDate getPublicacao(), Long getVisualizacoes(), Long getCurtidas(),String getCategoria(),
   * String getCaminho(), List<String> getCaminhos()
   */
  buscarHistorico: async (usuarioId, size, page) => {
    try {
      const header = {
        usuarioId: usuarioId,
      };
      const response = await axios.get(
        `/api/video/buscar-historico?size=${size}&page=${page}`,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  buscarTodos: async (usuarioId, size, page) => {
    try {
      const header = {
        usuarioId: usuarioId,
      };
      const response = await axios.get(
        `/api/video/buscar-resumido?size=${size}&page=${page}`,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  buscarTodosShorts: async (usuarioId, size, page) => {
    try {
      const header = {
        usuarioId: usuarioId,
      };
      const response = await axios.get(
        `/api/video/buscar-todos-shorts?size=${size}&page=${page}`,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  buscarPorCategoria: async (usuarioId, size, page) => {
    try {
      const header = {
        usuarioId: usuarioId,
      };
      const response = await axios.get(
        `/api/video/buscar-por-categoria?size=${size}&page=${page}`,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  buscarShorts: async (usuarioId) => {
    try {
      const header = {
        usuarioId: usuarioId,
      };
      const response = await axios.get(
        "/api/video/buscar-shorts",
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  buscarUploads: async (donoCanalId, size, page) => {
    try {
      const header = {
        usuarioId: donoCanalId,
      };
      const response = await axios.get(
        `/api/video/buscar-videos-canal?size=${size}&page=${page}`,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  filtrarVideos: async (usuarioId, size, page, filtro, pesquisa) => {
    try {
      const header = {
        usuarioId: usuarioId,
      };
      const response = await axios.get(
        `/api/video/filtro/${pesquisa}?size=${size}&page=${page}`, filtro,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  }
};

export default VideoService;
