import axios from "./AxiosConfig"

const UserService = {
    criar: async (credentialUser) => {
        try {
            const res = await axios.post("/api/usuario/cadastro", credentialUser)
            console.log("Entrei na função criar")
            return res
        } catch (err) {
            console.error(err)
        }
    },

    login: async (credentials) => {
        try {
            console.log(credentials)
            const res = await axios.post("/api/usuario/login", credentials)
            console.log(res.data)
            return res
        } catch (err) {
            console.error(err)
        }
    }
}

export default UserService 