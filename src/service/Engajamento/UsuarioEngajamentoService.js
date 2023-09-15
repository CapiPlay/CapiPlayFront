import axios from "../AxiosConfig"

const UsuarioEngajamentoService = {
  
  /**
   *
   * @returns Usuario (String idUsuario, String nomePerfil, String nomeCanal, String foto, int quantidadeInscritos, String descricao)
   */
  buscarUm: async () => {

    try {
      const response = await axios.get("/engajamento/usuario")
      console.log(response.data)
      return response.data
    } catch (err) {
      console.error(err)
    }
  },
}

export default UsuarioEngajamentoService
