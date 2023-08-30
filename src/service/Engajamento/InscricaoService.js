import axios from "../AxiosConfig";

const InscricaoService = {
  /**
   *
   * @param {*} idUsuario String
   * @param {*} criarInscricaoCommand (String idUsuario, String canal)
   * @returns void
   */
  criar: async (idUsuario, criarInscricaoCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.post(
        "/engajamento/inscricao",
        criarInscricaoCommand,
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
   * @param {*} buscarUmInscricaoCommand (String idUsuario, String idCanal)
   * @returns Inscricao (Usuario idUsuario, Usuario idCanal)
   */
  buscarUm: async (idUsuario, buscarUmInscricaoCommand) => {
    try {
      const header = {
        usuarioId: idUsuario,
      };
      const response = await axios.get(
        "/engajamento/inscricao",
        buscarUmInscricaoCommand,
        { header }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};
