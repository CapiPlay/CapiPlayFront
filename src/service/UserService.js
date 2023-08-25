import axios from "./AxiosConfig"

// import axios from "axios"

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
            const res = await axios.get("/api/usuario")
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
    }, 
    getTokenAnonimo: async () => {
        try {
            const response = await axios.post("/api/usuario/anonimo")
            console.log(response.data)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
};

export default UserService;