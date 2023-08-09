import axios from "./AxiosConfig"

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
    }
}

export default UserService 