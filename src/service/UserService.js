import axios from "./AxiosConfig"

const userApiUrl = 'http://7000/api/usuario';

const UserService = {
    criar: async (credentialUser) => {
        try {
            const response = await axios.post(userApiUrl, credentialUser);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
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