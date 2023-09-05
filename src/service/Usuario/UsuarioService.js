import axios from "../AxiosConfig";

const UserService = {

  /**
   *
   * @param {*} usuarioDto (String nome, String senha, String email, String perfil(Apelido), 
   * String foto - não obrigatório, Date dataNascimento)
   * @param {*} MultipartFile foto1 (foto principal) 
   * @returns Boolean (true - deu certo, false - deu erro)
   */
  criar: async (usuarioDto, foto1) => {
    try {
      const response = await axios.post("/api/usuario/cadastro", usuarioDto, foto1);
      return response.data;
    } catch (error) {
      throw error
    }
  },

  /**
   *
   * @param {*} loginDto (String email, String senha)
   * @returns String token
   */
  login: async (loginDto) => {
    try {
      const response = await axios.post("/api/usuario/login", loginDto);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  /**
   *
   * @returns DetalhesUsuarioProjection (String nome, String email, String perfil(Apelido), String foto, Date dataNascimento)
   */
  detalhes: async () => {
    try {
      const response = await axios.get("/api/usuario");
      console.log(response)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  /**
   *
   * @param {*} editarUsuarioCommand (String id, String nome, String perfil(Apelido), 
   * String senha, String descrição, Byte[] foto)
   * @param {*} MultipartFile foto1 (foto principal) 
   * @returns void
   */
  editar: async ( editarUsuarioCommand, foto1) => {
    try {
      const response = await axios.put(`/api/usuario`, editarUsuarioCommand, foto1);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  /**
   * @returns void
   */
  deletar: async () => {
    try {
      const response = await axios.delete("api/usuario");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  /**
   *
   * @returns String
   */
  getTokenAnonimo: async () => {
    try {
      const response = await axios.post("/api/usuario/anonimo");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default UserService;
