import axios from "./AxiosConfig"

const UserService = {
    criar: async (credentialUser) => {
        try {
            const response = await axios.get("/usuario", credentialUser)
            return response
        } catch (err) {
            console.error(err)
        }
    }
}

export default UserService 