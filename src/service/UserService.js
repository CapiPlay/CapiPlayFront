import axios from "./AxiosConfig"

const UserService = {
    criar: async (credentialUser) => {
        try {
            const response = await axios.get("/usuario", credentialUser)
            return response
        } catch (err) {
            console.error(err)
        }
    }, 
    editar: function(id, credentialUser){
        axios.put(url + '/' + credentialUser + '/' + id).then((response) => {
            return response.data
        })
    }


}

export default UserService 