import axios from "axios";

const url = 'http://localhost:8081/user'

export const UserService = {

  create: function (user) {
    console.log(user)
    axios.post(url, user).then((response) => {
      return response.data;
    });
  },

  findAll: function () {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  findOne: function (id) {
    axios.get(url + '/' + id).then((response) => {
      return response.data;
    });
  },
  edit: function (id, user) {
    axios.patch(url + '/' + id, user).then((response) => {
      return response.data
    })
  },
  delete: function(id){
    axios.delete(url + '/'+ id).then((response) => {
        return response.data;
      });
}

}
export default UserService;