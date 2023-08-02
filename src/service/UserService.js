import axios from "./AxiosConfig"

const UserService = {
    criar: async (credentialUser) => {
        try {
            const response = await axios.post("/api/usuario/cadastro", {
                params: {
                    foto1: credentialUser
                }
            })
            console.log("Entrei na função criar")
            return response
        } catch (err) {
            console.error(err)
        }
    }
}

export default UserService 