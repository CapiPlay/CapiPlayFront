import axios from "../AxiosConfig";


const VideoService = {
  /**
   *
   * @param {*} idUsuario String
   * @param {*} video ( String titulo,String descricao,List<String> tags,String categoria,
   * Boolean shorts, MultipartFile video,MultipartFile miniatura,Boolean restrito,String usuarioId))
   * @returns void
   */ 
  criar: async (formData, usuarioId) => {
    return await axios.post('/api/video/criar', formData, {
      headers: {
        'usuarioId': usuarioId,
      },
    });
  },

  /**
   *
   * @param {*} usuarioId String
   * @param {*} uuid String
   * @returns VideoProjection (String getUuid(),String getTitulo(), String getDescricao(), String getCaminho(), 
   * List<String> getCaminhos(),List<Tag> getTags(), Long getQtdComentarios(), String getCategoria(),
   * Long getVisualizacoes(), Long getCurtidas();)
   */
  buscarCompleto: async (uuid) => {
    try {
      const response = await axios.get(
        `/video/buscar-completo/${uuid}`
      );
      return response.data;
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
  buscarHistorico: async (size, page) => {
    try {
      const response = await axios.get(
        `/video/buscar-historico?size=${size}&page=${page}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  buscarTodos: async (size, page, shorts) => {
    try {
      const response = await axios.get(
        `/video/buscar-resumido?size=${size}&page=${page}&shorts=${shorts}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  // buscarResumido  : async (size, page, shorts) => {
  //   try {
  //     const response = await axios.get(
  //       `/video/buscar-resumido?size=${size}&page=${page}&shorts=${shorts}`
  //     );
  //     return response.data;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },


  buscarPorCategoria: async (categoria, page, size, shorts) => {
    try {
      const response = await axios.get(
        `/video/buscar-por-categoria?categoria=${categoria}&size=${size}&page=${page}&shorts=${shorts}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  buscarShorts: async () => {
    try {
      const response = await axios.get(
        "/video/buscar-shorts"
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  buscarUploads: async (size, page, donoCanalId) => {
    try {
      const response = await axios.get(
        `/video/buscar-videos-canal?size=${size}&page=${page}&donoCanalId${donoCanalId}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  filtrarVideos: async (size, page, filtro, pesquisa) => {
    try {
      const response = await axios.get(
        `/video/filtro/${pesquisa}?size=${size}&page=${page}`, filtro
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
};

export default VideoService;
