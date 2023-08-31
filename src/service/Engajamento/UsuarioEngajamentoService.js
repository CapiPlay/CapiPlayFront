import axios from "../AxiosConfig";

const UsuarioEngajamentoService = {
  
  /**
   *
   * @param {*} idUsuario String
   * @returns Usuario (String idUsuario, String nomePerfil, String nomeCanal, String foto, int quantidadeInscritos, String descricao)
   */
  buscarUm: async (idUsuario) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.get("/engajamento/usuario", { header });
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};

export default UsuarioEngajamentoService;
