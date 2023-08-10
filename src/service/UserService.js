import axios from "./AxiosConfig"

const userApiUrl = 'http://7000/api/usuario';

const UserService = {
    criar: async (credentialUser) => {
        try {
            const res = await axios.post("/api/usuario/cadastro", credentialUser)
            return res
        } catch (err) {
            console.error(err)
        }
    },

    login: async (credentials) => {
        try {
            const res = await axios.post("/api/usuario/login", credentials)
            return res
        } catch (err) {
            console.error(err)
        }
    },

    detalhes : async () => {
        try {
            const res = await axios.get("/api/usuario/detalhes")
            return res
        } catch (err) {
            console.error(err)
        }
    },
    editar: async (userId, userData) => {
        try {
            const response = await axios.put(`${userApiUrl}/${userId}`, userData);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    listar: async () => {
        try {
            const response = await axios.get(userApiUrl);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
};

export default UserService;