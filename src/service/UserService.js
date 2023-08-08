import axios from "axios";

const url = 'http://localhost:8084/api/engajamento/usuario'

export const UserService = {
  findOne: function (usuarioId) {
    return axios.get(url + '/' + usuarioId).then((response) => {
      return response.data;
    });
  }
}
export default UserService;