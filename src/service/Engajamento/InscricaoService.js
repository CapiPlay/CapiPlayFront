import axios from "../AxiosConfig";

const InscricaoService = {
  /**
   *
   * @param {*} criarInscricaoCommand (String idUsuario, String idCanal)
   * @returns void
   */
  criar: async (criarInscricaoCommand) => {
    try {
      const response = await axios.post(
        "/engajamento/inscricao",
        criarInscricaoCommand
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  /**
   *
   * @param {*} buscarUmInscricaoCommand (String idUsuario, String idCanal)
   * @returns Inscricao (Usuario idUsuario, Usuario idCanal)
   */
  buscarUm: async (idCanal) => {
    try {
      const response = await axios.get(
        "/engajamento/inscricao/" + idCanal
      );
      return response.data;
    } catch (err) {
      return
    }
  },
};

export default InscricaoService;